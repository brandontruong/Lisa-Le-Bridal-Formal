import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';
import Meta from './meta';
import Navigataion from './navigation';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Navigataion /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {

};
