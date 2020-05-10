import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import withNav from '../HOC/withNav';
import Layout from '../components/layout';

const About = ({ navItems }) => (
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

export default withNav(About);
