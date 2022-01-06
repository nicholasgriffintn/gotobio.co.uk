import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import AuthError from './error';

interface VerifyInput {
  email: string;
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
  const [email, setEmail] = useState<string | undefined>(passedThroughEmail);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const tryVerify = async (data: VerifyInput): Promise<void> => {
    try {
      if (email) {
        await Auth.confirmSignUp(email, data.code);
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
          await Auth.signIn(data.email, passedThroughPassword);
        } catch (error) {
          setErrorMessage(error.message);
          setShowError(true);
        }
      }

      router.push(`/sign-in`);
    } catch (error) {
      setErrorMessage(error.message);
      setShowError(true);
    }
  };

  const resendVerification = async () => {
    if (email) {
      try {
        await Auth.resendSignUp(email);
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
            htmlFor="code"
            className="absolute inline-block px-1 -mt-px text-xs font-medium text-white bg-pearl -top-2 left-2"
          >
            Code
          </label>
          <input
            type="code"
            name="code"
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
    </div>
  );
}
