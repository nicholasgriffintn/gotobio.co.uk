import PageLayout from '@/layout/main';

const NotFound = () => {
  return (
    <PageLayout
      pageTitle="404 Not Found"
      seo={{
        title: '404 Not Found',
        description:
          'The requested page was not found, please try a different one.',
      }}
      heroOptions={{
        background: 'transparent',
      }}
    ></PageLayout>
  );
};

export default NotFound;
