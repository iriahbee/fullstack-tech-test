import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import '@/styles/globals.css'

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });
  
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
  
}
