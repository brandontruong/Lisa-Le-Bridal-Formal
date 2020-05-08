import React from 'react';
import Link from 'next/link';
import ApolloClient from 'apollo-client';
import Head from 'next/head';
import { ApolloProvider, Query } from 'react-apollo';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { gql } from 'apollo-boost';
import Layout from '../components/layout';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api-euwest.graphcms.com/v1/cjxlq8u9b00gf01f4562pn4c8/master',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const GET_PAGES = gql`
  query ($id: ID) {
    page(where: {id: $id}) {
      status
      updatedAt
      createdAt
      id
      description {
        html
      }
    }
  }
`;

const ExchangeRates = () => (
  <Query
    query={GET_PAGES}
    variables={{ id: 'cjxoiw4gi38lb0941kfjhnosj' }}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div dangerouslySetInnerHTML={{ __html: data.page.description.html }} />
      );
    }}
  </Query>
);

const Index = () => (
  <ApolloProvider client={client}>

    <Layout>
      <Head>
        <title>Next.js Blog Example with </title>
      </Head>
      <div>
        <ExchangeRates />
      </div>
    </Layout>

    {/* <div>
      <Link href="/about">
        <a>About Page yup</a>
      </Link>
      <p>Hello Next.js</p>
      <ExchangeRates />
    </div> */}
  </ApolloProvider>

);

export default Index;
