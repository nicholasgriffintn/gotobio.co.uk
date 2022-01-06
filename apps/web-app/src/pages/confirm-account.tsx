import PageLayout from '@/layout/main';
import ConfirmAccountForm from '@/common/Form/Auth/confirmAccount';

const HomePage = () => {
  return (
    <PageLayout
      pageTitle="Confirm your Account"
      pageSummary="Enter the code to confirm your account"
      seo={{
        title: 'Confirm your Account',
        description: 'Enter the code to confirm your account',
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
        <ConfirmAccountForm
          passedThroughUsername=""
          passedThroughEmail=""
          passedThroughPassword=""
        />
      </section>
    </PageLayout>
  );
};

export default HomePage;
