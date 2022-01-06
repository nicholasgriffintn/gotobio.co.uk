import PageLayout from '@/layout/main';

const HomePage = () => {
  return (
    <PageLayout
      pageTitle="Manage your Bio"
      pageSummary="Create and edit your bio"
      seo={{
        title: 'Manage your Bio',
        description: 'Create and edit your bio',
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
        <h2>Admin Panel stuffs here</h2>
      </section>
    </PageLayout>
  );
};

export default HomePage;
