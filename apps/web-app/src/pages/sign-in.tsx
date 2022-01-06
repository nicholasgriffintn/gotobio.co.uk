import SignInForm from '@/common/Form/Auth/signIn';
import PageLayout from '@/layout/main';

const HomePage = () => {
  return (
    <PageLayout
      pageTitle="Sign into your account"
      pageSummary="Sign into your account to manage your bio"
      seo={{
        title: 'Sign into your account',
        description: 'Sign into your account to manage your bio',
      }}
      showBanner={false}
    >
      <section
        className="
          flex
          items-center
          justify-center
          h-screen
          min-h-full
          px-4
          py-6
          sm:px-6
          lg:px-16
        "
      >
        <SignInForm />
      </section>
    </PageLayout>
  );
};

export default HomePage;
