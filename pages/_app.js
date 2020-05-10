import App from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
        <>
          <Component {...pageProps} />
          <GlobalStyle whiteColor={false} />
        </>
      </ThemeProvider>
    );
  }
}
