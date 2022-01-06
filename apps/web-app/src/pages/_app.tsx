import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/styles/global';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/apollo/client';
import AuthContext from '@/context/AuthContext';
import { Header } from '@/common/Header';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '@/config';

const isLocalhost = process.env.NODE_ENV == 'development';

const [localRedirectSignIn, productionRedirectSignIn] =
  awsconfig.oauth.redirectSignIn.split(',');

const [localRedirectSignOut, productionRedirectSignOut] =
  awsconfig.oauth.redirectSignOut.split(',');

const updatedAwsConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: isLocalhost
      ? localRedirectSignIn
      : productionRedirectSignIn,
    redirectSignOut: isLocalhost
      ? localRedirectSignOut
      : productionRedirectSignOut,
  },
};

Amplify.configure({
  ...updatedAwsConfig,
  graphql_headers: async () => {
    try {
      // @ts-ignore: idToken doesn't exist according to TypeScript
      const token = (await Auth.currentSession()).idToken.jwtToken;
      return { Authorization: token };
    } catch (e) {
      console.error(e);
      return {};
    }
  },
  ssr: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <AuthContext>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Header />
        <main className="h-full">
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </AuthContext>
  );
}
export default MyApp;
