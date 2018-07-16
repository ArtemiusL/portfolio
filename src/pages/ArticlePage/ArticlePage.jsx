import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import ArticleSlider from './ArticleSlider';
// import FixedContent from './FixedContent';

import content from './content';

const {
  gallery_images_url: images,
  date_begin: date,
} = content;

class ArticlePage extends PureComponent {
  state = { fullStory: false }

  render() {
    console.log(this.state.fullStory);

    return (
      <div>
        <ArticleSlider
          images={images}
          date={date}
        />
      </div>
    );
  }
}

// ArticlePage.propTypes = {
//   props: PropTypes.any,
// };

export default ArticlePage;
