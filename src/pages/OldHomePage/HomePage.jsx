/* eslint-disable */
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import { Grid, GridRow, GridColumn } from '_components/Grid/desktop';
import Picture from '_components/Picture';
import Text from '_components/Text';
import Button from '_components/Button';
import SocialLinks from '_components/SocialLinks';
import CursorArrowWrapp from '_components/CursorArrowWrapp';
import SnpSlider from '_components/SnpSlider';
import { Slider, Dotes, SliderList, Picker, Arrow } from '_components/DoamaralSlider';

import styles from './HomePage.scss';

const picture = {
  source: [
    {
      media: 1920,
      src: 'https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg',
    },
    {
      media: 767,
      src: 'https://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg',
    },
    {
      media: 320,
      src: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg',
      retina: 'https://ribalych.ru/wp-content/uploads/2017/05/prikoly_011-17.jpg',
    },
  ],
  alt: 'Какойто текст',
  defaultSrc: 'https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg',
};

const generateSlides = (count) => {
  let items = [];
  for (let i = count; i >= 0; i -= 1) {
    items = [...items, i];
  }
  return items;
};

const slides = generateSlides(10);

const createDoamaralSLides = slides.map(el =>
  <div key={el}>sjds</div>
);

const HomePage = () => (
  <Fragment>
    <Helmet title="Home" />
    <div styleName="root">
      <Slider>
        <SliderList>
          {createDoamaralSLides}
        </SliderList>
        <Picker />
        <Dotes />
        <Arrow
          styleName="arrow"
          type="prev"
        />
        <Arrow
          styleName="arrow"
          type="next"
        />
      </Slider>


      <Grid>
        <GridRow />
        <GridRow rows={3}>
          <GridColumn columns={2} />
          <GridColumn columns={8}>
            <div>
              <Text tag="h1" size="large" color="silver">
                заголовок
              </Text>
              <Text tag="h2">
                заголовок2
              </Text>
              <Text
                tag="p"
                fontWeight="semi-bold"
                size="medium"
              >
                параграй
              </Text>
            </div>
          </GridColumn>
          <GridColumn columns={2} />
        </GridRow>
        <GridRow rows={3}>
          <GridColumn columns={12}>
            <CursorArrowWrapp>
              <div style={{ height: '400px' }}>
                <Picture
                  defaultSrc={picture.defaultSrc}
                  source={picture.source}
                  alt={picture.alt}
                />
              </div>
            </CursorArrowWrapp>
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn columns={12}>
            <div>
              <Text
                color="black"
                tag="span"
                fontWeight="semi-bold"
                size="medium"
              >
                cegth vtuf ntrcn
                <Button href="/hhp">
                  <Text
                    tag="span"
                    fontWeight="semi-bold"
                    size="medium"
                  >
                     button2
                  </Text>
                </Button>
                <Button>
                  <Text
                    tag="span"
                    fontWeight="semi-bold"
                    size="medium"
                  >
                     button3
                  </Text>
                </Button>
              </Text>
            </div>
          </GridColumn>
        </GridRow>
        <GridRow row={3}>
          <GridColumn columns={12}>
            <div style={{ width: '100%' }}>
              <SnpSlider
                styleName="slider"
                noControls
                centerMode
                multislider
              >
                {
                  slides.map((slide, index) => <div styleName="slide" key={`ex_1_${slide}`}>{index}</div>)}
              </SnpSlider>
            </div>
          </GridColumn>
        </GridRow>

        <GridRow row={3}>
          <GridColumn columns={12}>
            <div style={{ width: '100%' }}>
              <SnpSlider
                styleName="slider"
                defaultPosition="center"
                multislider
              >
                {
                  slides.map((slide, index) => <div styleName="slide" key={`ex_1_${slide}`}>{index}</div>)}
              </SnpSlider>
            </div>
          </GridColumn>
        </GridRow>
        <GridRow rows={1} >
          <GridColumn columns={4}>
            <SocialLinks theme="white" />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  </Fragment>
);

export default CSSModules(HomePage, styles);
