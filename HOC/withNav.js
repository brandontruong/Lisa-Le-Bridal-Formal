import React from 'react';
import fetch from 'node-fetch';
import filter from 'lodash/filter';

import baseApiUrl from '../utils/config';

const withNav = (C) => {
  class NavComponent extends React.Component {
    static async getInitialProps(ctx) {
      const res = await fetch(`${baseApiUrl}pages`);
      const allPages = await res.json();
      const pages = filter(allPages, ({ slug }) => slug !== 'home');
      const navItems = pages.map((item) => ({ title: item.title.rendered, id: item.id, slug: item.slug }));

      // Get component’s props
      let componentProps = {};
      if (C.getInitialProps) {
        componentProps = await C.getInitialProps(ctx);
      }

      return {
        navItems,
        ...componentProps,
      };
    }

    render() {
      return <C {...this.props} />;
    }
  }

  return NavComponent;
};

export default withNav;
