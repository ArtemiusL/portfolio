import React, { PureComponent } from 'react';
import _size from 'lodash/size';
import _each from 'lodash/each';

const mediaPreloaderHOC = Component => (
  class MediaPreloader extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        loaded: 0,
      };

      if (__CLIENT__) {
        document.addEventListener('DOMContentLoaded', this.proceedContent);
      }

      this.loadableElementsNumber = null;
    }

    onContentLoaded = () => {
      const loaded = (this.state.loaded + 1);
      const completed = loaded === this.loadableElementsNumber;
      this.setState({ loaded, completed });
    }

    getImages = () =>
      [...document.getElementsByTagName('img')];

    getElementsWithBgImages = () =>
      [...document.getElementsByTagName('div')]
        .filter(el => el.style.backgroundImage);

    getVideos = () =>
      [...document.getElementsByTagName('video')];

    getProgress = () => {
      if (this.loadableElementsNumber) {
        return Math.round((this.state.loaded / this.loadableElementsNumber) * 100);
      }

      return 0;
    }

    isCompleted = () => {
      if (!this.loadableElementsNumber) {
        return false;
      }

      return this.state.completed;
    }

    proceedContent = () => {
      this.loadableElementsNumber = this.countLoadableElements();
      const mediaContentExists = this.loadableElementsNumber !== 0;

      if (mediaContentExists) {
        this.proceedAllBgImages();
        this.proceedAllImages();
        this.proceedAllVideos();
      } else {
        this.setState({
          loaded: 0,
          completed: true,
        });
      }
    }

    countLoadableElements = () => {
      const bgImages = this.getElementsWithBgImages();
      const images = this.getImages();
      const videos = this.getVideos();
      return _size(bgImages) + _size(images) + _size(videos);
    }

    /* all bg images should be set through inline attributes */
    proceedAllBgImages() {
      const bgImages = this.getElementsWithBgImages();
      return bgImages.map((el) => {
        const src = el.style.backgroundImage.slice(4, -1).replace(/"/g, '');
        const _image = new Image();
        _image.onload = this.onContentLoaded;
        _image.src = src;
        return _image;
      });
    }

    proceedAllImages() {
      const images = this.getImages();
      return images
        .map((image) => {
          const memoryImage = new Image();
          memoryImage.onload = this.onContentLoaded;
          memoryImage.src = image.src;
          return memoryImage;
        });
    }

    proceedAllVideos() {
      const videos = this.getVideos();
      _each(videos, (video) => {
        if (video.readyState >= video.HAVE_FUTURE_DATA) {
          this.onContentLoaded();
        } else {
          video.addEventListener('canplay', this.onContentLoaded);
        }
      });
    }

    render() {
      return (
        <Component
          progress={this.getProgress()}
          completed={this.isCompleted()}
          {...this.props}
        />
      );
    }
  }
);

export default mediaPreloaderHOC;
