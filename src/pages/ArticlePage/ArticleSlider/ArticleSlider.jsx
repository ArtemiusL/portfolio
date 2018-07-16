import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import {
  Grid,
  GridRow,
  GridColumn,
  GridInner,
} from '_components/Grid/desktop';

import { Slider, Dotes, SliderList, Picker, Arrow } from '_components/DoamaralSlider';
import SmallArrow from '_components/SvgIcons/SmallArrow';
import Picture from '_components/Picture';
import Text from '_components/Text';

import styles from './ArticleSlider.scss';

const ArticleSlider = ({ images, date }) => {
  const createSlide = (image) => {
    const source = [
      {
        media: '',
        src: image.image_url,
      },
    ];

    return (
      <Picture
        styleName="picture"
        key={image.image_url}
        source={source}
      />
    );
  };

  const imagesList = images.map(createSlide);

  return (
    <div styleName="root">
      <Slider>
        <SliderList styleName="sliderList">
          { imagesList }
        </SliderList>
        <Grid>
          <GridRow fullWindow rows={1} />

          <GridRow fullWindow rows={1}>
            <GridColumn columns={1} position="left bottom">
              <Text
                styleName="rotateText"
                rotate="left"
                tag="span"
                color="white"
                size="normal"
              >
                Scroll to read
              </Text>
            </GridColumn>
            <GridColumn columns={11} />
          </GridRow>

          <GridRow fullWindow rows={1} />

          <GridRow fullWindow rows={5} >
            <GridColumn columns={11}>
              <GridRow fullWindow rows={1}>
                <GridColumn columns={1}>
                  <Text
                    tag="span"
                    color="white"
                    size="medium-l"
                    fontWeight="semi-bold"
                  >
                    {date}
                  </Text>
                </GridColumn>
                <GridColumn columns={10} />
              </GridRow>
            </GridColumn>
            <GridColumn columns={1}>
              <GridInner>
                <GridRow fullWindow rows={2}>
                  <GridColumn position="right top">
                    <div styleName="controls">
                      <Picker
                        classPickerList={styles.pickerList}
                        classMaxCount={styles.picerMax}
                        separate={<div styleName="picker-separate">/</div>}
                      />
                      <Dotes
                        classActiveDote={styles.activeDote}
                        classDotButton={styles.dotButton}
                        classDotList={styles.dotList}
                        classDot={styles.dot}
                      />
                    </div>
                  </GridColumn>
                </GridRow>
                <GridRow fullWindow rows={1}>
                  <GridColumn position="right bottom">
                    <div styleName="arrowControls">
                      <Arrow type="prev">
                        <SmallArrow
                          duration="top"
                          size="small"
                        />
                      </Arrow>
                      <Arrow type="next">
                        <SmallArrow
                          duration="bottom"
                          size="small"
                        />
                      </Arrow>
                    </div>
                  </GridColumn>
                </GridRow>
              </GridInner>
            </GridColumn>
          </GridRow>

        </Grid>
      </Slider>
    </div>
  );
};

ArticleSlider.propTypes = {
  images: PropTypes.any,
  date: PropTypes.string,
};

export default CSSModules(ArticleSlider, styles);
