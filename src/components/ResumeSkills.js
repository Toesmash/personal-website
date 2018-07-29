import React from 'react';

import { rating } from './Resume';


const ResumeSkills = () => (
  <div className="resume__section">
    <h2>Programming skills</h2>
    <div className="section__skills">
      <div>
        <p>HTML & CSS</p>
        <span>{rating(5, 7)}</span>
      </div>
      <div>
        <p>JavaScript</p>
        <span>{rating(5, 7)}</span>
      </div>
      <div className="separator" />
      <div>
        <p>React & Redux</p>
        <span>{rating(4, 7)}</span>
      </div>
      <div>
        <p>NodeJS</p>
        <span>{rating(2, 7)}</span>
      </div>
      <div className="separator" />
      <div>
        <p>Git, Webpack, Parcel, BEM, SCSS</p>
      </div>
    </div>
  </div>
);

export default ResumeSkills;

