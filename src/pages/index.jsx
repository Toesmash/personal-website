import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import HomePage from "../components/HomePage/HomePage";

const pagesHome = (props) => {
  return (
    <Layout isCentered>
      <HomePage profilePic={props.data.profilePic.childImageSharp.fluid} />
    </Layout>
  );
}

export default pagesHome;

export const pageQuery = graphql`
  query {
    profilePic: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
