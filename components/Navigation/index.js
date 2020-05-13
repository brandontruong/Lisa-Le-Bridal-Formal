import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

const StyledLI = styled.li`
  float: left
`;

const StyledA = styled.a`
  display: block;
  color: white;
  text-align: center;
  cursor: pointer;
  padding: 14px 16px;
  text-decoration: none;
  background-color: ${(props) => (props.isActive ? '#111' : 'transparent')};
  :hover {
    background-color: #111;
  },
`;

const StyledUI = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: sticky;
  top: 0;
`;

const Navigation = ({ navItems, activeNav, basePath }) => (
  <Grid
    columns="auto auto"
    justifyContent="space-between"
  >
    <Cell>
      <hgroup id="logo">
        <h1 id="site-title">
          <a href="/" rel="home" className="hvr-buzz-out">
            Lisa Le
          </a>
        </h1>
        <h2 id="site-description">Bridal &amp; Formal</h2>
      </hgroup>

    </Cell>
    <Cell>
      <StyledUI>
        { navItems.map((navItem) => (
          <StyledLI key={`nav-${navItem.slug}`}>
            <Link href={`${basePath}${navItem.slug}`}>
              <StyledA isActive={activeNav === navItem.slug}>
                {navItem.title}
              </StyledA>
            </Link>
          </StyledLI>
        ))}
      </StyledUI>
    </Cell>
  </Grid>
);

Navigation.propTypes = {
  basePath: PropTypes.string,
  activeNav: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Navigation.defaultProps = {
  basePath: 'pages/',
};

export default Navigation;
