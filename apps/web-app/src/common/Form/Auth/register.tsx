import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

import AuthError from './error';
import Link from '@/common/Link';
import ConfirmAccountForm from './confirmAccount';

interface SignUpInput {
  email: string;
  username: string;
  password: string;
}

export default function RegisterForm() {
  const [phase, setPhase] = useState<number>(1);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { register, handleSubmit } = useForm<SignUpInput>();

  const trySignUp = async (data: SignUpInput) => {
    try {
      const { user } = await Auth.signUp({
        username: data.username,
        password: data.password,
        attributes: {
          email: data.email,
        },
      });
      return user;
    } catch (error) {
      console.error('error signing up:', error);
      setErrorMessage(error.message);
      return null;
    }
  };

  const onSubmit = async (data: SignUpInput) => {
    console.log(data);

    const attempt = await trySignUp(data);
    if (attempt) {
      setUserName(data.username);
      setUserEmail(data.email);
      setUserPassword(data.password);
      setPhase(2);
    } else {
      setShowError(true);
    }
  };

  if (phase === 1) {
    return (
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-center text-white">
            Create an account for free forever!
          </h2>
          <p className="text-1xl font-normal text-center text-white">
            Yes really! Free forever!
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
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
              placeholder="yourusername"
              {...register('username', { required: true })}
            />
          </div>
          <div className="relative px-3 py-2 border border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
            <label
              htmlFor="email"
              className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
              placeholder="email@gotobio.com"
              {...register('email', { required: true })}
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
              name="password"
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
              Sign up now
            </button>
          </div>
        </form>

        <p className="mx-auto mt-3 text-xs text-center text-santa">
          Already signed up?&apos;s{' '}
          <Link href="/sign-in">
            <a className="text-moody hover:text-white">Sign in instead</a>
          </Link>
        </p>
        <hr />
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
    );
  }

  if (phase === 2) {
    return (
      <ConfirmAccountForm
        passedThroughUsername={userName}
        passedThroughEmail={userEmail}
        passedThroughPassword={userPassword}
      />
    );
  }

  return (
    <AuthError
      errorHeader="Something went wrong"
      errorMessage="Please refresh this page."
    />
  );
}
