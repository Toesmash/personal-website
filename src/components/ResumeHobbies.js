import React from 'react';
import Car from 'react-icons/lib/fa/automobile';
import Cinema from 'react-icons/lib/fa/film';
import Games from 'react-icons/lib/fa/gamepad';
import Travel from 'react-icons/lib/fa/plane';
import Drawing from 'react-icons/lib/fa/paint-brush';
import Music from 'react-icons/lib/fa/music';



const ResumeHobbies = () => (
  <div className="resume__section">
    <h2>Hobbies</h2>
    <div className="section__hobbies">
      <div>
        <Car className="glyph glyph--hobby" />
        <Cinema className="glyph glyph--hobby" />
        <Games className="glyph glyph--hobby" />
      </div>
      <div>
        <Travel className="glyph glyph--hobby" />
        <Drawing className="glyph glyph--hobby" />
        <Music className="glyph glyph--hobby" />
      </div>
    </div>
  </div>
);

export default ResumeHobbies;