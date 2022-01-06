import PageLayout from '@/layout/main';

const HomePage = () => {
  return (
    <PageLayout
      pageTitle="Connect all of your audiences with just one link"
      pageSummary="Sign for free today to enhance your social media bio"
      seo={{
        title: 'One link to connect all of your audiences',
        description: 'Sign for free today to enhance your social media bio',
      }}
      pageLink={[
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
      ]}
    >
      <section></section>
    </PageLayout>
  );
};

export default HomePage;
