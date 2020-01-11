import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button = ({ link, onClick, type, isPill, children }) => {
  if (!!link && !onClick) return (
    <Link
      to={link}
      className={cx(
        styles.button,
        styles[type],
        {
          [styles.pill]: isPill,
        }
      )}
    >
      {children}
    </Link>
  );

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary']).isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  isPill: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

Button.defaultProps = {
  link: '',
  onClick: null,
  isPill: false,
};

export default Button;
