import PageLayout from '@/layout/main';
import { useUser } from '@/context/AuthContext';

const HomePage = () => {
  const { user } = useUser();

  return (
    <PageLayout
      pageTitle={
        !user
          ? 'Connect all of your audiences with just one link'
          : `Welcome back ${user.username}!`
      }
      pageSummary={
        !user
          ? 'Sign up for free today to enhance your social media bio'
          : 'Here are some useful links:'
      }
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
              {
                href: `/p/${user.username}`,
                text: 'Public Bio',
                type: 'secondary',
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
