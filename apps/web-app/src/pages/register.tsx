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
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-center text-white">
              Create an account for free forever!
            </h2>
            <p className="text-1xl font-normal text-center text-white">
              Yes really! Free forever!
            </p>
          </div>
          <RegisterForm />
          <p className="mx-auto mt-3 text-xs text-center text-santa">
            You acknowledge that you read and agree with Go To Bio&apos;s{' '}
            <Link href="/terms">
              <a className="text-moody hover:text-white">Terms of Service</a>
            </Link>{' '}
            and and{' '}
            <Link href="/privacy">
              <a className="text-moody hover:text-white">Privacy Policy.</a>
            </Link>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
