import PageLayout from '@/layout/main';

const AdminPage = () => {
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
      <section className="relative w-full">
        <div className="relative items-center w-full px-5 pt-12 mx-auto md:px-12 lg:px-20">
          <div>
            <div className="px-4 mx-auto sm:px-6 lg:px-0">
              <div className="sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <img
                    className="w-12 h-12 rounded-full ring-4 ring-cinder"
                    src="./images/avatar.png"
                    alt=""
                  />
                </div>
                <div className="mt-6 sm:flex-1 sm:min-w-0 lg:mt-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1 lg:pb-0">
                  <div className="flex-1 min-w-0 mt-6 space-y-2 lg:mt-0 sm:hidden md:block">
                    <h3 className="text-xl font-normal leading-snug tracking-tight text-white ">
                      Michael Andreuzza <span className="text-santa">/</span>{' '}
                      Edit Profile
                    </h3>
                    <p className="text-sm font-normal text-santa">
                      Set up your presence and hiring needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20">
          <div className="space-y-4 overflow-hidden lg:p-6 bg-cinder rounded-3xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
              <div className="hidden p-6 bg-pearl rounded-2xl lg:block">
                <nav className="space-y-8" aria-label="Sidebar">
                  <a
                    href="./profile.html"
                    className="items-center block w-full text-base font-medium transition duration-500 ease-in-out transform  text-santa hover:text-moody focus:outline-none"
                    aria-current="page"
                  >
                    <span> Profile </span>
                  </a>
                </nav>
              </div>
              <div className="col-span-3 space-y-6">
                <div>
                  <div className="p-6 space-y-8 bg-pearl rounded-2xl">
                    <div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row">
                      <div className="relative overflow-hidden rounded-full">
                        <img
                          className="relative w-20 h-20 rounded-full"
                          src="./images/avatar.png"
                          alt=""
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
                      <div className="flex flex-col w-full max-w-2xl gap-2 lg:flex-row">
                        <div className="rounded-lg sm:mt-0 lg:ml-3 ">
                          <a className="block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform lg:px-10 tems-center bg-majorelly rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2">
                            Upload new picture
                          </a>
                        </div>
                        <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                          <a className="items-center block w-full px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-river">
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="member"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="member"
                          id="member"
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          placeholder="name"
                        />
                      </div>
                      <span className="text-xs text-santa">
                        We enjoy real names around here, so people know who’s
                        who.
                      </span>
                    </div>
                    <div>
                      <div className="relative px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="location"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          Locaton
                        </label>
                        <input
                          type="text"
                          name="location"
                          id="location"
                          className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          placeholder="location"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-full px-3 py-2 border-2 border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
                        <label
                          htmlFor="email"
                          className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
                        >
                          <span>Bio</span>
                        </label>
                        <textarea
                          className="block w-full h-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
                          id="description"
                          type="text"
                          name="description"
                          placeholder="Bio..."
                          required={true}
                        ></textarea>
                      </div>
                      <span className="text-xs text-santa">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </span>
                    </div>
                    <div className="pb-6 border-b border-river">
                      <h3 className="text-lg font-normal leading-6 text-white">
                        Online Presence
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
