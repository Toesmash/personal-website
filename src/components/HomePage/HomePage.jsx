import React from 'react';
import Img from 'gatsby-image';
import Container from '../Container/Container';
import styles from './HomePage.module.scss';
import Button from '../Button/Button';

const HomePage = ({ profilePic }) => (
  <Container className={styles.wrapper}>
    <Img
      className={styles.profilePic}
      fluid={profilePic}
      alt="My face"
    />
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
