import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow, GridColumn } from '_components/Grid/desktop';

import withRouterParams from '_hocs/withRouterParams';
import Navigation from '_components/Navigation';
import Locations from '_components/Locations';
import Copyright from '_components/Copyright';

import SubscriptionForm from './SubscriptionForm';
import ContactUs from './ContactUs';

const Footer = ({ pageConfig: { footer } }) => {
  if (!footer) return null;

  return (
    <div>
      <Grid withoutTop>
        <GridRow rows={2}>
          <GridColumn columns={1} />
          <GridColumn columns={4}>
            <SubscriptionForm />
          </GridColumn>

          <GridColumn columns={1} />

          <GridColumn columns={1}>
            <Navigation type="footer" />
          </GridColumn>

          <GridColumn columns={1} />

          <GridColumn columns={2}>
            <Locations
              type="acordion"
              theme="white"
            />
          </GridColumn>

          <GridColumn columns={1} />

          <GridColumn columns={1} position="right top">
            <ContactUs />
          </GridColumn>

        </GridRow>

        <GridRow rows={1}>
          <GridColumn columns={10} />
          <GridColumn columns={2} position="right bottom">
            <Copyright theme="white" />
          </GridColumn>
        </GridRow>

      </Grid>
    </div>
  );
};

Footer.propTypes = {
  pageConfig: PropTypes.object,
};

export default withRouterParams(Footer);
