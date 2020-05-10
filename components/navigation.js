import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

const useStyles = makeStyles({
  ul: {
    'list-style-type': 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    'background-color': '#333',
    position: 'sticky',
    top: 0,
  },
  li: {
    float: 'left',
  },
  a: {
    display: 'block',
    color: 'white',
    'text-align': 'center',
    padding: '14px 16px',
    'text-decoration': 'none',
    '&:hover': {
      'background-color': '#111',
    },
  },
  active: {
    'background-color': '#4CAF50',
  },
});

const appUrl = 'http://brandontruong.me/wp-json/wp/v2/';
const getPages = `${appUrl}pages`;
const Navigation = ({ navItems, basePath }) => {
  const classes = useStyles();
  return (
    <ul className={classes.ul}>
      { navItems.map((navItem) => (
        <li className={classes.li}>
          <Link href={`${basePath}${navItem.slug}`} key={`nav-${navItem.slug}`}>
            <a className={classes.a}>
              <Typography variant="h6" className={classes.title}>
                {navItem.title}
              </Typography>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Navigation;
