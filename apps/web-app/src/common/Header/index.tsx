import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';

import AppLogo from '../../../public/img/logo.svg';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

export const Header = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery(ViewerQuery);
  const viewer = data?.viewer;
  const hasLoadedSignIn = !(loading || error);
  const isSignedIn = viewer;

  const [show2, setShow2] = useState(false);

  return (
    <header className="text-gray-600 body-font absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto flex flex-wrap pt-2 pb-2 flex-col md:flex-row items-center">
        <a
          onClick={e => {
            e.preventDefault();
            router.push('/');
          }}
          href="/"
          title="Go back to the homepage"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 relative"
          style={{
            width: '50px',
            height: '50px',
          }}
        >
          <Image
            layout="fill"
            objectFit="contain"
            className="app-logo"
            alt="Course Filler"
            src={AppLogo}
          />
        </a>

        <nav className="menu w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-indigo-900 lg:flex-grow"></div>
          {hasLoadedSignIn ? (
            <>
              {isSignedIn ? (
                <div className="flex ">
                  <div className="pl-12 flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M31.5 21L27 16.5H16.5C15.6716 16.5 15 15.8284 15 15V6C15 5.17157 15.6716 4.5 16.5 4.5H30C30.8284 4.5 31.5 5.17157 31.5 6V21"
                          stroke="#718096"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 22.5V25.5C21 26.3284 20.3284 27 19.5 27H9L4.5 31.5V16.5C4.5 15.6716 5.17157 15 6 15H9"
                          stroke="#718096"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="pl-10 flex items-center">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-cover rounded-md mr-3">
                          <img
                            src="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="Avatar"
                            className="rounded-full h-full w-full overflow-hidden shadow"
                          />
                        </div>
                        <div className="flex relative items-center">
                          {show2 && (
                            <ul className="cursor-pointer p-2 w-40 border-r bg-white absolute rounded z-40 right-0 shadow mt-10  top-0">
                              <li className="cursor-pointer text-light-gray text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-user"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={7} r={4} />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                  </svg>
                                  <span className="ml-2">
                                    <a href="/account/profile">My Profile</a>
                                  </span>
                                </div>
                              </li>
                              <li className="cursor-pointer text-light-gray text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-settings"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="ml-2">
                                  <a href="/account/settings">
                                    Account Settings
                                  </a>
                                </span>
                              </li>
                              <li className="cursor-pointer text-light-gray text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-settings"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="ml-2">
                                  <a href="/account/sign-out">Sign Out</a>
                                </span>
                              </li>
                            </ul>
                          )}
                          <div
                            className="cursor-pointer text-light-gray"
                            onClick={() => setShow2(!show2)}
                          >
                            {show2 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-chevron-down"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" icon icon-tabler icon-tabler-chevron-up"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 15 12 9 18 15" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex ">
                  <a
                    href="/sign-in"
                    className="
                      items-center
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
                      lg:px-10
                      rounded-xl
                      focus:outline-none focus:ring-2 focus:ring-offset-2
                      shadow-thick
                    "
                  >
                    Sign In
                  </a>
                </div>
              )}
            </>
          ) : null}
          <div className="relative mx-auto text-gray-600 lg:block hidden ml-4"></div>
        </nav>
      </div>
    </header>
  );
};
