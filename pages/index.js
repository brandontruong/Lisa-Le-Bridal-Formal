import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import styled, { css } from 'styled-components';

import withNav from '../HOC/withNav';
import Layout from '../components/Layout';
import baseApiUrl from '../utils/config';

const Container = styled.div`
  height: 400px;
  position: relative;
  ${(props) => props.bg && css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${props.bg}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `};
`;

const Info = styled.div`
  line-height: 2em;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  h1 {
    font-size: 2.5em;
    line-height: 2em;
  }
`;

const Index = ({ navItems, page, acf }) => (
  <Layout navItems={navItems}>
    <Head>
      <title>{page.title}</title>
    </Head>
    <Container bg={acf.feature_image.url}>
      <Info dangerouslySetInnerHTML={{ __html: page.content }} />
    </Container>

  </Layout>

);

Index.getInitialProps = async (ctx) => {
  const res = await fetch(`${baseApiUrl}pages?slug=home`);
  const [foundPage] = await res.json();

  return {
    page: { title: foundPage.title.rendered, content: foundPage.content.rendered },
    acf: foundPage.acf,
  };
};

Index.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

};

export default withNav(Index);
