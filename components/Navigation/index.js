import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLI = styled.li`
  float: left
`;

const StyledA = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
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

const Navigation = ({ navItems, basePath }) => (
  <StyledUI>
    { navItems.map((navItem) => (
      <StyledLI key={`nav-${navItem.slug}`}>
        <Link href={`${basePath}${navItem.slug}`}>
          <StyledA>
            {navItem.title}
          </StyledA>
        </Link>
      </StyledLI>
    ))}
  </StyledUI>
);

Navigation.propTypes = {
  basePath: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Navigation.defaultProps = {
  basePath: 'pages/',
};

export default Navigation;