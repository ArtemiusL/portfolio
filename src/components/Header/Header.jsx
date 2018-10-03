import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { getFilterStatus, getMenuStatus } from './utils/helperStatus';

import withRouterParams from '_hocs/withRouterParams';

import { Grid, GridRow, GridColumn } from '_components/Grid/desktop';

import Buttons from './Buttons';
import Filters from './Filters';
import Menu from './Menu';

import styles from './Header.scss';

class Header extends Component {
  state = {
    typeAnimation: 'menu',
    filter: false,
    menu: false,
  }

  componentWillReceiveProps(nextProps) {
    const { currentMatch: { path } } = this.props;
    const { currentMatch: { path: nextPathname } } = nextProps;

    if (path !== nextPathname) {
      this.setState({
        typeAnimation: 'page',
        filter: false,
        menu: false,
      });
      document.body.style.overflow = '';
    }
  }

  onTogleFilter = () => {
    this.setState({
      filter: !this.state.filter,
      typeAnimation: 'menu',
    });
  }

  onTogleMenu = () => {
    if (!this.state.menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    this.setState({
      menu: !this.state.menu,
      typeAnimation: 'menu',
    });
  }

  render() {
    const { pageConfig: { filterMenu } } = this.props;
    const { filter, menu, typeAnimation } = this.state;
    const filterStatus = getFilterStatus(filter, menu);
    const menuStatus = getMenuStatus(filter, menu);
    const pageAnimation = typeAnimation === 'page';

    return (
      <Fragment>
        <div styleName="root">
          <Grid >
            <GridRow withoutHeight>
              <GridColumn columns={2} />
              <GridColumn columns={9} />
              <GridColumn columns={1}>
                <Buttons
                  visibleFilter={!filterMenu}
                  onTogleFilter={this.onTogleFilter}
                  onTogleMenu={this.onTogleMenu}
                  filterStatus={filterStatus}
                  menuStatus={menuStatus}
                />
              </GridColumn>
            </GridRow>
          </Grid>

          <Menu
            activeMenu={this.state.menu}
            pageAnimation={pageAnimation}
          />

          <Filters activeFilter={filter} />
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  currentMatch: PropTypes.object,
  pageConfig: PropTypes.object,
};

export default withRouterParams(CSSModules(Header, styles));
