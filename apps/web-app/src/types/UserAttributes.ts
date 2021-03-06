import { CognitoUser } from '@aws-amplify/auth';

export interface UserAttributes {
  sub: string;
  email: string;
  email_verified: string;
  name: string;
  updated_at: string;
  picture: string;
  birthdate: string;
  gender: string;
  phone_number: string;
  preferred_username: string;
  website: string;
  address: string;
  headline: string;
  bio: string;
  links: string;
  background: string;
  backgroundOpacity: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  whatsapp: string;
  telegram: string;
  signal: string;
  twitch: string;
  pinterest: string;
  tiktok: string;
}

export interface CognitoUserExt extends CognitoUser {
  username: string;
  attributes: UserAttributes;
}
