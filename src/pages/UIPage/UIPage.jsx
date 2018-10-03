
/* eslint-disable */
import React, { PureComponent, Fragment } from 'react';
import Helmet from 'react-helmet';

import Button from '_components/Button';
import TestComponent from '_components/TestComponent';
import Text from '_components/Text';

class UIPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet title="UIPage - components" />
        <TestComponent />
        <Button>
          <Text color="white">Кнопка</Text>
        </Button>
      </Fragment>
    );
  }
}

export default UIPage;
