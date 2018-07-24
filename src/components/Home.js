import React from 'react';
import { browserHistory } from '../router/AppRouter';

import imageURL from '../../public/images/me_squared.png'

const Home = () => (
  <div className="container__component">
    <div className="home">
      <div className="home__info">
        <p>Hi!</p>
        <p>My name is <span>Tomáš.</span></p>
        <p>And I want to be a web developer.</p>
        <button onClick={() => browserHistory.push('/resume')} className="button">Resume</button>
      </div>
      <div className="home__splitter"></div>
      <div className="home__picture">
        <img src={imageURL} alt="profile_picture" />
      </div>
    </div>
  </div>
);

export default Home;