import { CognitoUser } from '@aws-amplify/auth';

export interface UserAttributes {
  sub: string;
  email: string;
  email_verified: string;
  name: string;
  updated_at: string;
  picture: string;
}

export interface CognitoUserExt extends CognitoUser {
  username: string;
  attributes: UserAttributes;
}
