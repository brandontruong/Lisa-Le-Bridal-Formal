import React from 'react';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';
import find from 'lodash/find';
import Head from 'next/head';

import Layout from '../components/layout';

function Page({ page, navItems }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout navItems={navItems}>
      <Head>
        <title>
          {page.title}
        </title>
      </Head>
      <div>
        <div>{page.title}</div>
        <div>{page.content}</div>
      </div>
    </Layout>

  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch('http://brandontruong.me/wp-json/wp/v2/pages');
  const pages = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch('http://brandontruong.me/wp-json/wp/v2/pages');
  const pages = await res.json();

  const navItems = pages.map((item) => ({ title: item.title.rendered, id: item.id, slug: item.slug }));

  const page = find(pages, ['slug', params.slug]);

  return { props: { navItems, page: { title: page.title.rendered, content: page.content.rendered } } };
}

export default Page;
