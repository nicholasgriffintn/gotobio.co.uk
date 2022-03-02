import PageLayout from '@/layout/main';
import { useUser } from '@/context/AuthContext';
import AdminPanel from '@/common/Admin/panel';

const AdminPage = () => {
  const { user } = useUser();

  if (!user || !user.username) {
    return (
      <PageLayout
        pageTitle="Please sign in"
        pageSummary="To manage your bio, please sign in"
        seo={{
          title: 'Please sign in',
          description: 'To manage your bio, please sign in',
        }}
        showBanner={true}
      ></PageLayout>
    );
  }

  /* if (!user.attributes.email_verified) {
    return (
      <PageLayout
        pageTitle="Please verify your email"
        pageSummary="Check your inbox for a link!"
        seo={{
          title: 'Please verify your email',
          description: 'Check your inbox for a link!',
        }}
        showBanner={true}
      ></PageLayout>
    );
  } */

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
      <AdminPanel user={user} />
    </PageLayout>
  );
};

export default AdminPage;
