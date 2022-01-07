import PageLayout from '@/layout/main';
import { useUser } from '@/context/AuthContext';
import ProfileComponent from '@/common/Profile';

const AdminPage = () => {
  const { user } = useUser();

  if (!user || !user.username) {
    return <></>;
  }

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
      <section className="relative w-full pt-4">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20">
          <div className="space-y-4 overflow-hidden lg:p-6 bg-cinder rounded-3xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
              <div className="relative hidden overflow-hidden bg-pearl rounded-2xl lg:block">
                <ProfileComponent
                  profile={{
                    username: user.username,
                    fullname: user?.attributes?.name,
                    avatar: user?.attributes?.picture
                      ? user.attributes.picture
                      : user?.attributes?.email
                      ? `https://www.gravatar.com/avatar/${user.attributes.email}`
                      : `https://eu.ui-avatars.com/api/?name=${user.username}`,
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
                  }}
                />
              </div>
              <div className="col-span-3 space-y-6">
                <div className="max-h-screen overflow-scroll">
                  <div className="p-6 space-y-8 bg-pearl rounded-2xl">
                    <div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row">
                      <div className="relative overflow-hidden rounded-full">
                        <img
                          className="relative w-20 h-20 rounded-full"
                          src={
                            user?.attributes?.picture
                              ? user.attributes.picture
                              : user?.attributes?.email
                              ? `https://www.gravatar.com/avatar/${user.attributes.email}`
                              : `https://eu.ui-avatars.com/api/?name=${user.username}`
                          }
                          alt={user?.attributes?.name || user.username}
                        />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 flex items-center justify-center w-full h-full text-sm font-medium text-white bg-opacity-75 opacity-0 bg-pearl hover:opacity-100 focus-within:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer "
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="name"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          placeholder="Your Full Name"
                        />
                      </div>
                      <span className="text-xs text-santa">
                        Please enter your full name here, we use it for
                        displaying your name in the app.
                      </span>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="address"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          placeholder="Your Location"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="headline"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Headline
                        </label>
                        <input
                          type="text"
                          name="headline"
                          id="headline"
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          placeholder="Profile Headline"
                        />
                      </div>
                      <span className="text-xs text-santa">
                        Enter a headline for your profile here, if empty, the
                        headline will be your name or username.
                      </span>
                    </div>
                    <div>
                      <div className="relative h-full px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="bio"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          <span>Bio</span>
                        </label>
                        <textarea
                          className="block w-full h-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          id="bio"
                          name="bio"
                          placeholder="Bio..."
                          required={true}
                        ></textarea>
                      </div>
                      <span className="text-xs text-santa">
                        This should be a brief description for your profile.
                      </span>
                    </div>
                    <div className="pb-6 border-b border-river">
                      <h3 className="text-lg font-normal leading-6 text-white">
                        Links
                      </h3>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="location"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Personal Site
                        </label>
                        <input
                          type="text"
                          name="personal-site"
                          id="personal-site"
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          placeholder="personal website"
                        />
                      </div>
                      <span className="text-xs text-santa">
                        Your home page, blog, or company site.
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                      <div>
                        <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                          <label
                            htmlFor="location"
                            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                          >
                            Portoflio URL
                          </label>
                          <input
                            type="text"
                            name="portfolio-url"
                            id="portfolio-url"
                            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                            placeholder="portfolio url"
                          />
                        </div>
                        <span className="text-xs text-santa">
                          Only shared with potential employers.
                        </span>
                      </div>
                      <div>
                        <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                          <label
                            htmlFor="location"
                            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                          >
                            Portoflio Password
                          </label>
                          <input
                            type="password"
                            name="portfolio-password"
                            id="portfolio-password"
                            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                            placeholder="portfoliopassword"
                          />
                        </div>
                        <span className="text-xs text-santa">
                          {' '}
                          Only if needed.{' '}
                        </span>
                      </div>
                      <div>
                        <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                          <label
                            htmlFor="location"
                            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                          >
                            Portoflio Password
                          </label>
                          <input
                            type="password"
                            name="portfolio-password"
                            id="portfolio-password"
                            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                            placeholder="portfoliopassword"
                          />
                        </div>
                        <span className="text-xs text-santa">
                          {' '}
                          Only if needed.{' '}
                        </span>
                      </div>
                      <div>
                        <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                          <label
                            htmlFor="location"
                            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                          >
                            Portoflio Password
                          </label>
                          <input
                            type="password"
                            name="portfolio-password"
                            id="portfolio-password"
                            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                            placeholder="portfoliopassword"
                          />
                        </div>
                        <span className="text-xs text-santa">
                          {' '}
                          Only if needed.{' '}
                        </span>
                      </div>
                      <div>
                        <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                          <label
                            htmlFor="location"
                            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                          >
                            Portoflio Password
                          </label>
                          <input
                            type="password"
                            name="portfolio-password"
                            id="portfolio-password"
                            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                            placeholder="portfoliopassword"
                          />
                        </div>
                        <span className="text-xs text-santa">
                          {' '}
                          Only if needed.{' '}
                        </span>
                      </div>
                      <div>
                        <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                          <label
                            htmlFor="location"
                            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                          >
                            Portoflio Password
                          </label>
                          <input
                            type="password"
                            name="portfolio-password"
                            id="portfolio-password"
                            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                            placeholder="portfoliopassword"
                          />
                        </div>
                        <span className="text-xs text-santa">
                          {' '}
                          Only if needed.{' '}
                        </span>
                      </div>
                      <div className="flex mt-12">
                        <button
                          type="submit"
                          className="block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform tems-center bg-majorelly rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                          Save profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdminPage;
