import { signIn, signOut, useSession } from 'next-auth/react';

import PageLayout from '@/layout/main';

const HomePage = () => {
  const { data: session, status } = useSession();

  return (
    <PageLayout
      pageTitle="Register for an account today"
      pageSummary="Sign up for free today to enhance your social media bio"
      seo={{
        title: 'Register for an account today',
        description: 'Sign up for free today to enhance your social media bio',
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
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-center text-white">
              Sign into your account
            </h2>
            <p className="text-1xl font-normal text-center text-white">
              Enter your details below to sign in
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            {/* <div
              className="
                relative
                px-3
                py-2
                border border-gray-300
                rounded-xl
                focus-within:ring-1
                focus-within:ring-majorelle
                focus-within:border-moody
              "
            >
              <label
                htmlFor="name"
                className="
                  absolute
                  inline-block
                  px-1
                  -mt-px
                  text-xs
                  font-medium
                  text-white
                  bg-pearl
                  -top-2
                  left-2
                "
              >
                Username or Email
              </label>
              <input
                type="email"
                name="name"
                id="name"
                className="
                  block
                  w-full
                  py-1
                  text-white
                  bg-transparent
                  border-0
                  placeholder-river
                  focus:ring-0
                  sm:text-sm
                "
                placeholder="email@shadow.com"
              />
            </div>
            <div
              className="
                relative
                px-3
                py-2
                border border-gray-300
                rounded-xl
                focus-within:ring-1
                focus-within:ring-majorelle
                focus-within:border-moody
              "
            >
              <label
                htmlFor="password"
                className="
                  absolute
                  inline-block
                  px-1
                  -mt-px
                  text-xs
                  font-medium
                  text-white
                  bg-pearl
                  -top-2
                  left-2
                "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="
                  block
                  w-full
                  py-1
                  text-white
                  bg-transparent
                  border-0
                  placeholder-river
                  focus:ring-0
                  sm:text-sm
                "
                placeholder="Keep it secret, keep it safe!"
              />
            </div> */}
            <div>
              {!session ? (
                <button
                  type="button"
                  className="
                  items-center
                  block
                  w-full
                  px-8
                  py-3
                  mx-auto
                  text-base
                  font-medium
                  text-center text-white
                  transition
                  duration-500
                  ease-in-out
                  transform
                  bg-majorelly
                  lg:px-10
                  rounded-xl
                  hover:bg-gov
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                "
                  disabled={status === 'loading'}
                  onClick={() =>
                    signIn('cognito', {
                      callbackUrl: `${window.location.origin}/admin`,
                    })
                  }
                >
                  Sign into your Account
                </button>
              ) : (
                <div className="p-4 border rounded-xl bg-pearl border-tuna">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-info-circle text-moody"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        <polyline points="11 12 12 12 12 16 13 16"></polyline>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium text-moody">
                        You have signed in already!
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
