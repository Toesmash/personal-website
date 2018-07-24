import React from 'react';
import { Link } from 'react-router-dom';

import Facebook from 'react-icons/lib/fa/facebook-square';
import Github from 'react-icons/lib/fa/github';
import Instagram from 'react-icons/lib/fa/instagram';
import Linked from 'react-icons/lib/fa/linkedin-square';

const Footer = () => (
  <footer className="footer">
    <a target="_blank" href="https://www.facebook.com/togislav"><Facebook /></a>
    <a target="_blank" href="https://www.instagram.com/toesmashking/"><Instagram /></a>
    <a target="_blank" href="https://github.com/Toesmash"><Github /></a>
    <a target="_blank" href="https://linkedin.com/in/tomaschvalny"><Linked /> </a>
  </footer>
);

export default Footer;