export type TsignInCredentials = {
  email: string;
  password: string;
};

export type TSignInResponse = {
  token: string;
  user: object;
};

export type TsignUpCredentials = {
  email: string;
  password: string;

};

export type IauthContextServices = {
  signIn(credentials: TsignInCredentials): Promise<void>;
  signUp(credentials: TsignUpCredentials): Promise<void>;
};
