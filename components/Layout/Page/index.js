import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar';
import MobileNav from 'components/NavBar/MobileNav';
import styled from 'styled-components';
import { Flex, Box, Container } from 'components/Grid';
import FixContent from 'components/Layout/FixContentBlock';
import CondensedPlayer from 'components/Player/CondensedPlayer';
import screen from 'styles/helpers/media';
import zIndex from 'styles/helpers/zIndex';
import Footer from 'components/Footer';

const StyledPage = styled.div`
  color: ${props => props.theme.secondary};
  padding-bottom: ${props => (props.withAudio ? '80px' : '0px')};
`;

const HeaderBar = styled(Box)`
  z-index: ${zIndex.headerBar};
  width: 100%;
  position:relative;

  ${screen.md} {
    z-index: 13;
  }
`;

const FooterBar = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: ${zIndex.miniPlayer};
`;

/**
 * Page
 * @description A helper function to add components to a page based on the page requirements.
 */
function Page({ children, withAudio, withNav, withFooter }) {
  return (
    <StyledPage withAudio={withAudio}>
      {withNav
        && (
          <HeaderBar flex="0 1 auto">
            <NavBar />
          </HeaderBar>
        )
      }

      {withAudio
        ? (
          <FixContent>
            {children}
          </FixContent>
        )
        : children
      }

      {withAudio && (
        <>
          <FooterBar flexDirection="column">
            <CondensedPlayer />
            { withNav && <MobileNav />}
          </FooterBar>
        </>
      )}

      {withFooter && (
        <Container>
          <Footer />
        </Container>
      )}
    </StyledPage>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  withAudio: PropTypes.bool,
  withNav: PropTypes.bool,
  withFooter: PropTypes.bool,
};

Page.defaultProps = {
  withAudio: false,
  withNav: false,
  withFooter: false,
};

export default Page;
