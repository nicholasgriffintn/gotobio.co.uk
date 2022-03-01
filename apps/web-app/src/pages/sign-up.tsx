import PageLayout from '@/layout/main';
import Link from '@/common/Link';
import RegisterForm from '@/common/Form/Auth/register';

const HomePage = () => {
  return (
    <PageLayout
      pageTitle="Register for an account today"
      pageSummary="Sign up for free today to enhance your social media bio"
      seo={{
        title: 'Register for an account today',
        description: 'Sign up for free today to enhance your social media bio',
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
        <RegisterForm />
      </section>
    </PageLayout>
  );
};

export default HomePage;
