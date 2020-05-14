import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  display: block;
  position: relative;
  padding: 25px 0;
  background: #000;
`;

const StyledContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  &:after {
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    content: "";
  }
`;

const StyledHgroup = styled.hgroup`
  float: left;
  max-width: 100%;
  padding-right: 75px;
  line-height: 1;
  word-wrap: break-word;
`;

const StyledH1 = styled.h1`
  color: #fff;
  font-family: "Rokkitt", sans-serif;
  margin: 0;
  font-size: 36px;

  > a {
    color: #fff;
    font-size: 44px;
    text-decoration: none;
  }
`;

const StyledH2 = styled.h2`
  color: #ddd;
  font-size: 16px;
  font-style: italic;
`;

const StyledNav = styled.nav`
  float: right;
  clear: none;
  margin-top: 18px;
  padding: 0;
`;

const StyledLI = styled.li`
  display: inline-block;
  position: relative;
  border: 0;
`;

const StyledA = styled.a`
  margin: 0 4px 15px;
  padding: 5px 12px;
  display: block;
  color: #fff;
  text-decoration: none;
  ${(props) => props.isactive
    && css`
      border-radius: 2px;
      color: #fff;
      background: rgba(255, 255, 255, 0.25);
      -webkit-transition: 0.07s ease-in;
      transition: 0.07s ease-in;
    `};
  :hover {
    border-radius: 2px;
    color: #fff;
    background: rgba(255, 255, 255, 0.25);
    -webkit-transition: 0.07s ease-in;
    transition: 0.07s ease-in;
  },
  
`;

const StyledUI = styled.ul`
  display: block;
  clear: both;
  padding-top: 0;
  border-bottom: 0;
`;

const Navigation = ({ navItems, activeNav, basePath }) => (
  <StyledHeader>
    <StyledContainer>
      <StyledHgroup id="logo">
        <StyledH1 id="site-title">
          <a href="/" rel="home" className="hvr-buzz-out">
            Lisa Le
          </a>
        </StyledH1>
        <StyledH2 id="site-description">Bridal &amp; Formal</StyledH2>
      </StyledHgroup>

      <StyledNav id="navigation" role="navigation">
        <div className="menu-main-container">
          <StyledUI>
            { navItems.map((navItem) => (
              <StyledLI key={`nav-${navItem.slug}`}>
                <Link href={`${basePath}${navItem.slug}`}>
                  <StyledA isactive={activeNav === navItem.slug}>
                    {navItem.title}
                  </StyledA>
                </Link>
              </StyledLI>
            ))}
          </StyledUI>
        </div>
      </StyledNav>
    </StyledContainer>
  </StyledHeader>
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
