'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://main-example.codebootcamp.co.kr/graphql',
  cache: new InMemoryCache(),
});

export default function ApolloSetting(props) {
  return <ApolloProvider client={client}>{props.모든페이지}</ApolloProvider>;
}
