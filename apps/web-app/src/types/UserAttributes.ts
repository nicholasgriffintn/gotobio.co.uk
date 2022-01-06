import { CognitoUser } from '@aws-amplify/auth';

export interface UserAttributes {
  sub: string;
  email: string;
  email_verified: string;
  name: string;
  updated_at: string;
}

export interface CognitoUserExt extends CognitoUser {
  attributes: UserAttributes;
}