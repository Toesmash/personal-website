import React from 'react';
import Email from 'react-icons/lib/fa/envelope';
import Birthday from 'react-icons/lib/fa/birthday-cake';
import Home from 'react-icons/lib/fa/map-marker';
import Phone from 'react-icons/lib/fa/phone';

const ResumeContact = () => (
  <div className="resume__section">
    <h2>Personal info</h2>
    <div className="section__info">
      <p><span className="glyph glyph--info"><Home /></span>Bratislava, Slovakia</p>
      <p><span className="glyph glyph--info"><Birthday /></span>07.10.1993</p>
      <p><span className="glyph glyph--info"><Email /></span><a href="mailto:tom.chvalny@gmail.com">tom.chvalny@gmail.com</a></p>
      <p><span className="glyph glyph--info"><Phone /></span>+421 911 160 106</p>
    </div>
  </div>
);

export default ResumeContact;