import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  ul: {
    'list-style-type': 'none',
    border: 'solid red 1px',
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

const Navigation = ({ navItems, basePath }) => {
  const classes = useStyles();
  return (
    <ul className={classes.ul}>
      { navItems.map((navItem) => (
        <li className={classes.li} key={`nav-${navItem.slug}`}>
          <Link href={`${basePath}${navItem.slug}`}>
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

Navigation.propTypes = {
  basePath: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Navigation.defaultProps = {
  basePath: 'pages/',
};

export default Navigation;
