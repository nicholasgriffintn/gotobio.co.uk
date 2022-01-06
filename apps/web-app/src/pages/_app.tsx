import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { GlobalStyle } from '@/styles/global';
import { ApolloProvider } from '@apollo/client';
import { Footer } from '@/common/Footer';
import { useApollo } from '@/apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <main className="h-full">
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </SessionProvider>
  );
}
export default MyApp;
