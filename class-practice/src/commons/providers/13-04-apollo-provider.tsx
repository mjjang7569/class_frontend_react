'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://main-practice.codebootcamp.co.kr/graphql',
  cache: new InMemoryCache(),
});

export default function ApiProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
