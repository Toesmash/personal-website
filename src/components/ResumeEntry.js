import React from 'react';
import Pin from 'react-icons/lib/fa/map-pin';

const ResumeEntry = (props) => (
  <div className="resume__entry">
    <h3><span>{props.status}</span> {props.title} <span className="resume__entry__subtitle">- {props.subtitle}</span></h3>
    <p className="resume__entry__time">{props.time}</p>
    <p className="resume__entry__location">{props.location}</p>
  </div>
);

export default ResumeEntry;