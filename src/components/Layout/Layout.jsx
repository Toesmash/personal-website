import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';

import NavBar from '../NavBar/NavBar';
import styles from './Layout.module.scss';

const Layout = ({ children, isCentered, className }) => (
  <Fragment>
    <NavBar />
    <div className={cx(
      styles.wrapper,
      {
        [styles.centered]: isCentered,
      },
      className
    )}>
      {children}
    </div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isCentered: PropTypes.bool,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
  isCentered: false,
};

export default Layout;
