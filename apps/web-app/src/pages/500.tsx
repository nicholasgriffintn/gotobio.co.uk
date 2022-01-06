import PageLayout from '@/layout/main';

const NotFound = () => {
  return (
    <PageLayout
      pageTitle="500 Internal Server Error"
      seo={{
        title: '500 Internal Server Error',
        description: 'Something unexpected happened',
      }}
      heroOptions={{
        background: 'transparent',
      }}
    ></PageLayout>
  );
};

export default NotFound;
