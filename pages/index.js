import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withNav from '../HOC/withNav';
import Layout from '../components/Layout';

const Index = ({ navItems }) => (
  <Layout navItems={navItems}>
    <Head>
      <title>About page </title>
    </Head>
    <div>
      <Link href="/about">
        <a>About Page me</a>
      </Link>
      <p>About page hello yey</p>
    </div>
  </Layout>

);

Index.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withNav(Index);
