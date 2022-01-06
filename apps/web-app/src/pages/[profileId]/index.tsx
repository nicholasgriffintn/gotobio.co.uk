import PageLayout from '@/layout/main';

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
      {profile.background ? (
        <section
          className="w-full h-screen fixed bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: profile.backgroundOpacity
              ? `linear-gradient(rgb(46 45 46 / 60%), rgb(48 47 48 / 40%)), url(${profile.background})`
              : `url(${profile.background})`,
          }}
        ></section>
      ) : null}
      <section
        className="
        relative
        z-30
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
            <div className="w-full text-center mb-4">
              <img
                className="w-24 h-24 m-auto rounded-full ring-4 ring-cinder"
                src={profile.avatar}
                alt={profile.fullname}
              />
            </div>
            <h1 className="text-3xl font-bold text-center text-white">
              {profile.title}
            </h1>
            <p className="text-1xl font-normal text-center text-white">
              {profile.bio}
            </p>
          </div>
          {profile.links && profile.links.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {profile.links.map((link, index) => {
                return (
                  <div key={`links-link-${index}`} className="w-full">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.type === 'primary'
                          ? 'w-full inline-block items-center px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform  bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-thick'
                          : 'w-full inline-block items-center px-8 py-2.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white lg:px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-thick'
                      }
                    >
                      {link.title}
                    </a>
                  </div>
                );
              })}
            </div>
          ) : null}
          {profile.social && profile.social.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {profile.social.map((network, index) => {
                return (
                  <div key={`social-link-${index}`}>
                    <a
                      href={`${
                        network.network === 'facebook'
                          ? `https://www.facebook.com/profile.php?id=${network.username}`
                          : network.network === 'facebook'
                          ? `https://twitter.com/${network.username}`
                          : ``
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block items-center text-base font-medium text-center text-white"
                    >
                      {network.network === 'facebook' ? (
                        <svg
                          className="w-6 h-6 text-blue-600 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      ) : network.network === 'twitter' ? (
                        <svg
                          className="w-6 h-6 text-blue-300 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      ) : network.network === 'whatsapp' ? (
                        <svg
                          className="w-6 h-6 text-green-400 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                        </svg>
                      ) : network.network === 'linkedin' ? (
                        <svg
                          className="w-6 h-6 text-blue-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>
                      ) : network.network === 'telegram' ? (
                        <svg
                          className="w-6 h-6 text-gray-400 text-blue-400 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                        </svg>
                      ) : network.network === 'reddit' ? (
                        <svg
                          className="w-6 h-6 text-red-500 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                        </svg>
                      ) : network.network === 'pinterest' ? (
                        <svg
                          className="w-6 h-6 text-pink-600 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                        </svg>
                      ) : network.network === 'instagram' ? (
                        <span>Instagram</span>
                      ) : network.network === 'youtube' ? (
                        <span>YouTube</span>
                      ) : network.network === 'twitch' ? (
                        <span>Twitch</span>
                      ) : network.network === 'email' ? (
                        <span>Email</span>
                      ) : null}
                    </a>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </section>
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
              title: 'Nicholas Griffin',
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
