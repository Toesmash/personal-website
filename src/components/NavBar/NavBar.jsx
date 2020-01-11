import React from 'react';
import { Link } from 'gatsby';
import styles from './NavBar.module.scss';

import {
  WORK_PATH,
  HOMEPAGE_PATH,
  RESUME_PATH,
  PROJECTS_PATH,
} from '../../common/paths';

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Link to={HOMEPAGE_PATH}>TomasChvalny</Link>
      </div>
      <div>
        <Link to={RESUME_PATH}>Resume</Link>
        <Link to={WORK_PATH}>Work</Link>
        <Link to={PROJECTS_PATH}>Projects</Link>
      </div>
    </div>
  );
};

export default NavBar;
