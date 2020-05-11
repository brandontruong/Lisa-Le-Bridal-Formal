import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import find from 'lodash/find';
import Head from 'next/head';

import Layout from '../../components/Layout';

function Page({ page, navItems, activeNav, basePath, products, acf }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout navItems={navItems} basePath={basePath} activeNav={activeNav}>
      <Head>
        <title>
          {page.title}
        </title>
      </Head>
      <div>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        { acf && acf.feature_image && (
          <p><img src={acf.feature_image.url} alt="feature" /></p>
        )}
        { products && products.map((product) => (
          <div>
            <p>{product.title}</p>
            <p><img src={product.picture} alt="product" /></p>
            <p>
              <span>Price: </span>
              {`${product.price} AUD`}
            </p>
          </div>
        )) }
      </div>
    </Layout>

  );
}

Page.propTypes = {
  page: PropTypes.node.isRequired,
  basePath: PropTypes.string,
  activeNav: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  acf: PropTypes.shape({}),
};

Page.defaultProps = {
  basePath: 'pages/',
  products: undefined,
  acf: undefined,
};

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

  const foundPage = find(pages, ['slug', params.slug]);

  let products;
  if (params.slug === 'products') {
    const resProducts = await fetch('http://brandontruong.me/wp-json/wp/v2/products');
    const productsData = await resProducts.json();

    products = productsData.map((product) => ({
      title: product.title.rendered,
      picture: product.acf.picture.url,
      price: product.acf.price,
    }));
    return { props: {
      basePath: '',
      navItems,
      activeNav: params.slug,
      page: { title: foundPage.title.rendered, content: foundPage.content.rendered },
      products,
    } };
  }

  console.log('===acf====', foundPage.acf);
  return {
    props: {
      basePath: '',
      navItems,
      activeNav: params.slug,
      page: { title: foundPage.title.rendered, content: foundPage.content.rendered },
      acf: foundPage.acf,
    },
  };
}

export default (Page);
