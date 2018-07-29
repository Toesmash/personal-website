import React from 'react';

import { rating } from './Resume';

const ResumeLanguages = () => (
  <div className="resume__section">
    <h2>Languages</h2>
    <div className="section__skills">
      <div>
        <p>English</p>
        <span>{rating(6, 7)}</span>
      </div>
      <div>
        <p>German</p>
        <span>{rating(3, 7)}</span>
      </div>
    </div>
  </div>
);

export default ResumeLanguages;