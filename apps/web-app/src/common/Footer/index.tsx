export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font z-20 text-center">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col text-center">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-400"
        >
          <span className="ml-3 text-xl">Go To Bio</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()}
        </p>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <a href="https://nicholasgriffin.dev/?utm_source=GOTOBIO&utm_medium=FOOTER&utm_campaign=APP">
            <span className="ml-3 text-sm text-gray-500">
              App by Nicholas Griffin
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};
