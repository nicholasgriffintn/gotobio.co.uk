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
      pageTitle="Go to Bio"
      pageSummary="#AwesomeBio"
      seo={{
        title: 'Go to Bio',
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
              username: 'demo',
              fullname: 'Demo Avatar',
              avatar:
                'https://cdn.nicholasgriffin.dev/profile-demo/36748616061539.jpg',
              background:
                'https://cdn.nicholasgriffin.dev/profile-demo/5488082.jpg',
              backgroundOpacity: true,
              headline: 'Demo',
              bio: "This is a demo of Go to Bio, it's pretty awesome!",
              links: [
                {
                  href: 'https://gottobio.co.uk',
                  title: 'Homepage',
                  external: true,
                  type: 'primary',
                },
                {
                  href: 'https://gottobio.co.uk/sign-up',
                  title: 'Sign Up',
                  external: true,
                  type: 'secondary',
                },
                {
                  href: 'https://gottobio.co.uk/sign-in',
                  title: 'Sign In',
                  external: true,
                  type: 'secondary',
                },
              ],
              social: [
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'twitter',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'facebook',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'whatsapp',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'linkedin',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'telegram',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'reddit',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'pinterest',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'instagram',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'youtube',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'twitch',
                },
                {
                  username: 'go_to_bio',
                  external: true,
                  network: 'email',
                },
              ],
            }
          : {},
    },
  };
}
