import React from 'react';
import Briefcase from 'react-icons/lib/fa/briefcase';
import Schoolcap from 'react-icons/lib/fa/graduation-cap';

import ResumeEntry from './ResumeEntry';

const ResumeEntryList = () => (
  <div className="resume__section">
    <div className="resume__education">
      <h2><span><Briefcase /></span>Work experience</h2>
      <div>
        <ResumeEntry title="ZUNO bank a.g." subtitle="IT Tester" location="Bratislava" time="September 2015 – April 2017" />
        <ResumeEntry title="The Capital Markets Company Slovakia (CAPCO)" location="Bratislava, Zürich" subtitle="IT Tester" time="May 2017 – December 2017" />
      </div>
    </div>
    <div className="resume__work">
      <h2><span><Schoolcap /></span>Education</h2>
      <div>
        <ResumeEntry status="Mgr." title="Pan-European University" location="Bratislava" subtitle="Applied informatics" time="2016 – 2018" />
        <ResumeEntry status="Bc." title="Pan-European University" location="Bratislava" subtitle="Applied informatics" time="2015 – 2016" />
        <ResumeEntry title="Slovak university of Technology" location="Bratislava" subtitle="Informatics" time="2012 – 2015" />
        <ResumeEntry title="Souhegan High School" location="New Hampshire, USA" subtitle="Exchange program" time="2010 – 2011" />
        <ResumeEntry title="Grammar School" location="Bratislava" subtitle="Foreign languages" time="2004 – 2012" />
      </div>

    </div>
  </div>
);

export default ResumeEntryList;