import { useEffect, useState } from 'react';

import PageLayout from '@/layout/main';
import { getCognitoAuthenticatedUser } from '@/lib/auth';

const HomePage = () => {
  const [user, setUser] = useState({});

  const retrieveUserData = async (): Promise<void> => {
    try {
      const userData = await getCognitoAuthenticatedUser();

      setUser(userData);
    } catch (error) {
      console.error('error getting user:', error);
    }
  };

  useEffect(() => {
    retrieveUserData();
  }, []);

  return (
    <PageLayout
      pageTitle="Connect all of your audiences with just one link"
      pageSummary="Sign up for free today to enhance your social media bio"
      seo={{
        title: 'One link to connect all of your audiences',
        description: 'Sign up for free today to enhance your social media bio',
      }}
      pageLink={
        !user
          ? [
              {
                href: '/register',
                text: 'Get Started',
                type: 'primary',
                external: false,
              },
              {
                href: '/sign-in',
                text: 'Sign In',
                type: 'secondary',
                external: false,
              },
            ]
          : [
              {
                href: '/admin',
                text: 'Admin',
                type: 'primary',
                external: false,
              },
            ]
      }
    >
      <section></section>
    </PageLayout>
  );
};

export default HomePage;
