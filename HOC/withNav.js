import React from 'react';
import fetch from 'node-fetch';

const withNav = (C) => {
  class AuthComponent extends React.Component {
    static async getInitialProps(ctx) {
      const res = await fetch('http://brandontruong.me/wp-json/wp/v2/pages');
      const pages = await res.json();

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

  return AuthComponent;
};

export default withNav;
