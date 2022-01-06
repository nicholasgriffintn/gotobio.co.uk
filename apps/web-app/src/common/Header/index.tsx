import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

import { getCognitoAuthenticatedUser } from '@/lib/auth';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

export const Header = () => {
  const [show2, setShow2] = useState(false);

  const [user, setUser] = useState<{
    username?: string;
    attributes: {
      picture?: string;
      email?: string;
    };
  }>({ attributes: {} });

  const retrieveUserData = async (): Promise<void> => {
    try {
      const userData = await getCognitoAuthenticatedUser();

      setUser(userData);
    } catch (error) {
      console.error('error getting user:', error);
    }
  };

  useEffect(() => {
    retrieveUserData();
  }, []);

  if (!user || !user.username) {
    return <></>;
  }

  return (
    <header className="text-gray-600 body-font absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto flex flex-wrap pt-2 pb-2 flex-col md:flex-row items-center">
        <nav className="menu w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-indigo-900 lg:flex-grow"></div>
          <div className="flex pt-2">
            <div className="pl-12 flex items-center">
              <div className="pl-10 flex items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-cover rounded-md mr-3">
                    <img
                      src={
                        user?.attributes?.picture
                          ? user.attributes.picture
                          : user?.attributes?.email
                          ? `https://www.gravatar.com/avatar/${user.attributes.email}`
                          : `https://eu.ui-avatars.com/api/?name=${user.username}`
                      }
                      alt={user.username}
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
                              <a href="/admin">Admin</a>
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
                            <a href="/settings">Account Settings</a>
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
                            <a href="/sign-out">Sign Out</a>
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
                      ) : (
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto text-gray-600 lg:block hidden ml-4"></div>
        </nav>
      </div>
    </header>
  );
};
