import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import AuthError from './error';

interface VerifyInput {
  username: string;
  code: string;
}

export default function ConfirmAccountForm({
  passedThroughUsername,
  passedThroughEmail,
  passedThroughPassword,
}: {
  passedThroughUsername: string;
  passedThroughEmail: string;
  passedThroughPassword: string;
}) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<VerifyInput>();

  const [resent, setResent] = useState<boolean>(false);
  const [username, setUsername] = useState<string | undefined>(
    passedThroughUsername,
  );
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const tryVerify = async (data: VerifyInput): Promise<void> => {
    try {
      if (data.username && data.code) {
        setUsername(data.username);
        await Auth.confirmSignUp(data.username, data.code);
      } else {
        throw new Error('No username or code was provided');
      }
    } catch (error) {
      console.error('error verifying:', error);
    }
  };

  const onSubmit = async (data: VerifyInput) => {
    try {
      await tryVerify(data);

      if (passedThroughPassword) {
        try {
          await Auth.signIn(data.username, passedThroughPassword);
        } catch (error) {
          if (error instanceof Error) {
            setErrorMessage(error?.message);
          }
          setShowError(true);
        }
      }

      router.push(`/sign-in`);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error?.message);
      }
      setShowError(true);
    }
  };

  const resendVerification = async () => {
    if (username) {
      try {
        await Auth.resendSignUp(username);
        setResent(true);
      } catch (err) {
        console.error('error resending code: ', err);
      }
    }
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-center text-white">
          Confirm your account
        </h2>
        <p className="text-1xl font-normal text-center text-white">
          Enter the code from your email to confirm your account
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {showError ? (
          <AuthError
            errorHeader="We could not confirm your account"
            errorMessage={errorMessage}
          />
        ) : null}
        <div className="relative px-3 py-2 border border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
          <label
            htmlFor="username"
            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
          >
            Your Username
          </label>
          <input
            type="username"
            id="username"
            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
            placeholder="yourusername"
            defaultValue={username}
            {...register('username', { required: true })}
          />
        </div>
        <div className="relative px-3 py-2 border border-gray-300 rounded-xl focus-within:ring-1 focus-within:ring-majorelle focus-within:border-moody">
          <label
            htmlFor="code"
            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
          >
            Code
          </label>
          <input
            type="code"
            id="code"
            className="block w-full py-1 text-white bg-transparent border-0 placeholder-river focus:ring-0 sm:text-sm"
            placeholder="Enter your code here"
            {...register('code', { required: true })}
          />
        </div>
        <div>
          <button
            type="submit"
            className="items-center block w-full px-8 py-3 mx-auto text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Confirm your Account
          </button>
        </div>
      </form>

      {!resent ? (
        <p className="mx-auto mt-3 text-xs text-center text-santa">
          Didn&apos;t receive an email?{' '}
          <button
            type="button"
            onClick={resendVerification}
            className="text-moody hover:text-white"
          >
            Resend the code
          </button>
        </p>
      ) : null}
    </div>
  );
}
