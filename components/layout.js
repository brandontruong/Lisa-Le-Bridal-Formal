import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import Meta from './meta';
import Navigataion from './navigation';

export default function Layout({ basePath, navItems, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigataion navItems={navItems} basePath={basePath} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  basePath: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Layout.defaultProps = {
  basePath: 'pages/',
};
