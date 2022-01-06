import PageLayout from '@/layout/main';

const NotFound = () => {
  return (
    <PageLayout
      pageTitle="Sorry, this page isn't available offline."
      seo={{
        title: "Sorry, this page isn't available offline.",
        description: "Sorry, this page isn't available offline.",
      }}
      heroOptions={{
        background: 'transparent',
      }}
    ></PageLayout>
  );
};

export default NotFound;
