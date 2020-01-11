import React from 'react';
import Container from '../Container/Container';
import styles from './HomePage.module.scss';
import Button from '../Button/Button';

const HomePage = () => (
  <Container className={styles.wrapper}>
    <h1 className={styles.heading}>
      Hi my name is <em>TOMÁŠ CHVALNÝ</em>,<br />a web developer based in Prague 🇨🇿
    </h1>
    <Button
      link="/resume"
      type="primary"
      isPill
    >
      Go to Resume
    </Button>

  </Container>
);

export default HomePage;
