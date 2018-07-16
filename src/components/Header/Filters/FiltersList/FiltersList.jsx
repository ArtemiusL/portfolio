import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import FilterText from '_components/AnimationWrapper/FilterText';
import Button from '_components/Button';
import Text from '_components/Text';

import styles from './FiltersList.scss';

const FiltersList = ({ filters, activeFilter }) => {
  const createItem = (el, i) => (
    <li key={el.link} styleName="item">
      <FilterText
        isVisible={activeFilter}
        delayIn={150 + (i * 50)}
      >
        <Button to={el.link}>
          <Text
            tag="span"
            size="normal"
            fontWeight="normal"
            color="black"
            hover="black"
          >
            {el.title}
          </Text>
        </Button>
      </FilterText>
    </li>
  );

  const filtersList = filters.map(createItem);

  return (
    <div styleName="root">
      <ul>
        {filtersList}
      </ul>
    </div>
  );
};

FiltersList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
  activeFilter: PropTypes.bool,
};

export default CSSModules(FiltersList, styles);
