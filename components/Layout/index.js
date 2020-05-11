import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer';
import Meta from '../Meta';
import Navigataion from '../Navigation';

export default function Layout({ basePath, navItems, activeNav, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigataion navItems={navItems} basePath={basePath} activeNav={activeNav} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  basePath: PropTypes.string,
  activeNav: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Layout.defaultProps = {
  basePath: 'pages/',
};
