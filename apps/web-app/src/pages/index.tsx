import PageLayout from '@/layout/main';
import { useUser } from '@/context/AuthContext';

const HomePage = () => {
  const { user } = useUser();

  return (
    <PageLayout
      pageTitle={
        !user
          ? 'Connect all of your audiences with just one link'
          : `Welcome back ${user?.attributes?.name || user.username}!`
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
                href: '/sign-up',
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
              {
                href: '/p/demo',
                text: 'Demo Profile',
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
      <div className="z-50 absolute bottom-0 left-0 w-full pb-4 pt-4 px-4 py-6 sm:px-2 lg:px-6">
        <a
          className="w-full inline-block items-center text-base font-medium text-center text-white"
          href="https://nicholasgriffin.dev/?utm_source=GOTOBIO&utm_medium=FOOTER&utm_campaign=SITE_CREATION"
        >
          <span>App by Nicholas Griffin</span>
        </a>
      </div>
    </PageLayout>
  );
};

export default HomePage;
