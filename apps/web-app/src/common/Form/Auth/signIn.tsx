import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Auth from '@aws-amplify/auth';

import AuthError from './error';
import Link from '@/common/Link';

interface SignInInput {
  username: string;
  password: string;
}

export default function SignInForm() {
  const router = useRouter();
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { register, handleSubmit } = useForm<SignInInput>();

  const trySignIn = async (data: SignInInput) => {
    try {
      const user = await Auth.signIn(data.username, data.password);
      return user;
    } catch (error) {
      console.error('error signing up:', error);
      if (error instanceof Error) {
        setErrorMessage(error?.message);
      }
    }
  };

  const onSubmit = async (data: SignInInput) => {
    const attempt = await trySignIn(data);
    if (attempt) {
      router.push(`/admin`);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-center text-white">
          Sign into your account
        </h2>
        <p className="text-1xl font-normal text-center text-white">
          Enter your details below to sign in
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {showError ? (
          <AuthError
            errorHeader="We could not register your account"
            errorMessage={errorMessage}
          />
        ) : null}
        <div className="relative px-3 py-2 border border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
          <label
            htmlFor="username"
            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
          >
            Username or Email
          </label>
          <input
            type="text"
            id="username"
            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
            placeholder="yourusername"
            {...register('username', { required: true })}
          />
        </div>
        <div className="relative px-3 py-2 border border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
          <label
            htmlFor="password"
            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
            placeholder="Keep it secret, keep it safe!"
            {...register('password', { required: true })}
          />
        </div>
        <div>
          <button
            type="submit"
            className="items-center block w-full px-8 py-3 mx-auto text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mx-auto mt-3 text-xs text-center text-santa">
        Not signed up yet?{' '}
        <Link href="/sign-up">
          <a className="text-moody hover:text-white">Sign up instead</a>
        </Link>
      </p>
    </div>
  );
}
