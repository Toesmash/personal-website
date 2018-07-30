import React from 'react';
import ResumeContact from './ResumeContact';
import ResumeSkills from './ResumeSkills';
import ResumeLanguages from './ResumeLanguages';
import ResumeHobbies from './ResumeHobbies';
import ResumeTitle from './ResumeTitle';
import ResumeEntryList from './ResumeEntryList';

import FullCircle from 'react-icons/lib/fa/circle';
import EmptyCircle from 'react-icons/lib/fa/circle-o';

import imageURL from '../../public/images/me_squared.png'

export const rating = (score, base) => {
  var rating = [];
  for (var i = 0; i < base; i++) {
    if (i < score) {
      rating.push(<FullCircle key={i} className="circle" />);
    }
    else {
      rating.push(<EmptyCircle key={i} className="circle" />);
    }
  }
  return rating;
};

const Resume = () => (
  <div className="resume">
    <div className="resume__left">
      <div className="resume__photo">
        <img src={imageURL} alt="profile_picture" />
      </div>
      <ResumeContact />
      <ResumeSkills />
      <ResumeLanguages />
      <ResumeHobbies />
    </div>
    <div className="resume__right">
      <ResumeTitle />
      <ResumeEntryList />
    </div>
  </div>
);

export default Resume;
