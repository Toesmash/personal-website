import React from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Layout.module.scss';

const Layout = ({ children, className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
