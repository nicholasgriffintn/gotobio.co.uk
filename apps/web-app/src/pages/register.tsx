import PageLayout from '@/layout/main';
import Link from '@/common/Link';

const HomePage = () => {
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
              Create an account for free forever!
            </h2>
            <p className="text-1xl font-normal text-center text-white">
              Yes really! Free forever!
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
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
                htmlFor="username"
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
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
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
                placeholder="gotobio.co.uk/yourusername"
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
                Email
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
            </div>
            <div>
              <button
                type="submit"
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
              >
                Sign up now
              </button>
            </div>
          </form>
          <p className="mx-auto mt-3 text-xs text-center text-santa">
            You acknowledge that you read and agree with Go To Bio&apos;s{' '}
            <Link href="/terms">
              <a className="text-moody hover:text-white">Terms of Service</a>
            </Link>{' '}
            and and{' '}
            <Link href="/privacy">
              <a className="text-moody hover:text-white">Privacy Policy.</a>
            </Link>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
