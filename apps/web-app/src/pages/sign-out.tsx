import { useEffect } from 'react';
import Auth from '@aws-amplify/auth';
import { useRouter } from 'next/router';

import PageLayout from '@/layout/main';

const SignOutPage = () => {
  const router = useRouter();

  const trySignOut = async () => {
    try {
      const user = await Auth.signOut();
      return user;
    } catch (error) {
      console.error('error signing out!:', error);
    }
  };

  useEffect(() => {
    try {
      trySignOut();

      router.push(`/sign-in`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <PageLayout
      pageTitle="Sign out of your account"
      pageSummary="Sign out of your account"
      seo={{
        title: 'Sign out of your account',
        description: 'Sign out of your account',
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
        <h1>Signing you out now...</h1>
      </section>
    </PageLayout>
  );
};

export default SignOutPage;
