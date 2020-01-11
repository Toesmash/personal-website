import React from 'react';
import { Link } from 'gatsby';
import styles from './NavBar.module.scss';

import {
  WORK_PATH,
  HOMEPAGE_PATH,
  RESUME_PATH,
  PROJECTS_PATH,
} from '../../common/paths';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.leftSection}>
        <Link
          to={HOMEPAGE_PATH}
        >
          {'< TomasChvalny />'}
        </Link>
      </div>
      <div className={styles.rightSection}>
        <Link
          to={RESUME_PATH}
          activeClassName={styles.activeLink}
        >
          Resume
        </Link>
        <Link
          to={WORK_PATH}
          activeClassName={styles.activeLink}
        >
          Work
        </Link>
        <Link
          to={PROJECTS_PATH}
          activeClassName={styles.activeLink}
        >
          Projects
        </Link>
      </div>
    </Container>
  );
};

export default NavBar;
