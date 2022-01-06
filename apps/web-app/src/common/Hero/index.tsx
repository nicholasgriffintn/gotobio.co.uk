import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type Props = {
  image?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  link?: {
    href: string;
    text: string;
    external?: boolean;
    type: 'primary' | 'secondary';
  }[];
  heroBg?: string;
  minimal?: boolean;
};

export const Hero = ({
  minimal = false,
  image,
  title,
  description,
  link,
  heroBg = `rgb(243 244 246)`,
}: Props) => {
  const router = useRouter();

  return (
    <section className="relative w-full">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex w-full mx-auto text-left lg:mt-16">
          <div className="relative inline-flex items-center m-auto align-middle">
            <div className="max-w-3xl space-y-8 lg:text-center">
              <h1 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
                {typeof title === 'string' ? (
                  <span className="text-iris">{title}</span>
                ) : (
                  title
                )}
              </h1>
              <div className="max-w-lg lg:mx-auto">
                <p className="mb-6 text-xl font-light text-santa">
                  {description}
                </p>
              </div>
              {link && link.length > 0 ? (
                <div className="flex w-full max-w-2xl gap-2 mt-6 lg:justify-center lg:mx-auto">
                  {link.map(options => {
                    return (
                      <>
                        {options.type === 'primary' ? (
                          <div className="my-3 rounded-lg sm:mt-0">
                            <a
                              href={options.href}
                              className="items-center block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-thick"
                            >
                              {options.text}
                            </a>
                          </div>
                        ) : (
                          <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                            <a
                              href={options.href}
                              className="
                              shadow-thick
                              items-center
                              block
                              px-8
                              py-2.5
                              text-base
                              font-medium
                              text-center text-white
                              transition
                              duration-500
                              ease-in-out
                              transform
                              border-2 border-white
                              rounded-xl
                              focus:outline-none
                              focus:ring-2
                              focus:ring-offset-2
                              focus:ring-white
                              hover:bg-white hover:text-majorelly
                            "
                            >
                              {options.text}
                            </a>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
