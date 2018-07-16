import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import isVisible from './utils/isVisible';
import { timeoutsShape } from './utils/propTypes';

const ReactTransitionGroup = ({
  routes,
  timeout,
  location,
}) => {
  const firstLevelRoute = location.pathname.split('/')[1] || '/';

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={firstLevelRoute}
        classNames="route"
        timeout={timeout}
      >
        {status => (
          <Switch location={location}>
            {renderRoutes(routes, { transitionStatus: status, isVisiblePage: isVisible(status) })}
          </Switch>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactTransitionGroup.propTypes = {
  location: PropTypes.object,
  routes: PropTypes.array,
  timeout: timeoutsShape,
};

export default withRouter(ReactTransitionGroup);
