import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children, className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
