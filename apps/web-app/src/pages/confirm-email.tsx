import PageLayout from '@/layout/main';

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
              Confirm your email
            </h2>
            <p className="text-1xl font-normal text-center text-white">
              Fill in the form below to confirm your email
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
                Confirm your Email Address
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
