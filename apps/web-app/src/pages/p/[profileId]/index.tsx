import PageLayout from '@/layout/main';
import ProfileComponent from '@/common/Profile';

const ProfilePage = props => {
  const { profile } = props;

  if (!profile || !profile.username) {
    return (
      <PageLayout
        pageTitle="Profile could not be found"
        pageSummary="Sorry, we could not find that profile!"
        seo={{
          title: 'Profile could not be found',
          description: 'Sorry, we could not find that profile!',
        }}
      ></PageLayout>
    );
  }

  return (
    <PageLayout
      pageTitle="Nicholas Griffin"
      pageSummary="#AwesomeBio"
      seo={{
        title: 'Nicholas Griffin',
        description: '#AwesomeBio',
      }}
      showBanner={false}
    >
      <ProfileComponent profile={profile} />
    </PageLayout>
  );
};

export default ProfilePage;

export async function getServerSideProps({ params }) {
  const { profileId } = params;

  return {
    props: {
      profile:
        profileId === 'demo'
          ? {
              username: 'ngriffin',
              fullname: 'Nicholas Griffin',
              avatar:
                'https://pbs.twimg.com/profile_images/1468372517538701316/HnQ_WZVg_400x400.jpg',
              background:
                'https://pbs.twimg.com/profile_banners/353849936/1638917863/1500x500',
              backgroundOpacity: true,
              headline: 'Nicholas Griffin',
              bio: 'Senior Software Engineer at the BBC and Full Time Technology Nerd/ Boomer. All opinions are my own.',
              links: [
                {
                  href: 'https://nicholasgriffin.dev',
                  title: 'Personal Site',
                  external: true,
                  type: 'primary',
                },
                {
                  href: 'https://nicholasgriffin.dev/projects',
                  title: 'Projects',
                  external: true,
                  type: 'secondary',
                },
                {
                  href: 'https://nicholasgriffin.dev/blog',
                  title: 'Blog',
                  external: true,
                  type: 'secondary',
                },
              ],
              social: [
                {
                  username: 'ngriffin_uk',
                  external: true,
                  network: 'twitter',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'facebook',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'whatsapp',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'linkedin',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'telegram',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'reddit',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'pinterest',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'instagram',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'youtube',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'twitch',
                },
                {
                  username: '100072789687102',
                  external: true,
                  network: 'email',
                },
              ],
            }
          : {},
    },
  };
}
