const awsconfig = {
  aws_project_region: 'us-east-1',
  aws_cognito_identity_pool_id:
    'us-east-1:6b702c6f-ac16-453e-81ad-a2b84f264f30',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_MCugpc3YI',
  aws_user_pools_web_client_id: 'dbssbm7hth3s49tsq2cvj2fvm',
  oauth: {
    scope: [
      'phone',
      'email',
      'openid',
      'profile',
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: 'http://localhost:3000/,https://gotobio.co.uk/',
    redirectSignOut: 'http://localhost:3000/,https://gotobio.co.uk/',
    responseType: 'code',
  },
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
  aws_user_files_s3_bucket: 'gottobioimages141116-dev',
  aws_user_files_s3_bucket_region: 'us-east-1',
};

export default awsconfig;
