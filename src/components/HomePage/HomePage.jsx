import React from 'react';
import { Link } from 'gatsby';
import Container from '../Container/Container';
import styles from './HomePage.module.scss';

const HomePage = () => (
  <Container className={styles.wrapper}>
    <h1 className={styles.heading}>
      Hi my name is <em>TOMÁŠ CHVALNÝ</em>,<br />a web developer based in Prague 🇨🇿
    </h1>
    <Link to="/resume">go to RESUME page</Link>
  </Container>
);

export default HomePage;
