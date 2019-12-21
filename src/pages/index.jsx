import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import '../styles/app.scss';

const HomePage = () => (
  <Layout>
    <h1>About the Author</h1>
    <p>Welcome to my Gatsby site.</p>
    <Link to="/resume">go to RESUME page</Link>
  </Layout>
);

export default HomePage;
