export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginCompleteSignUpResponse {
  data: ILoginCompleteSignUpResponseData;
}

export interface ILoginCompleteSignUpResponseData {
  name?: string;
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  sessionToken?: string;
  email?: string;
  token?: string;
}

export interface ICompleteSignUpRequest extends Pick<ILoginRequest, 'username' | 'password'> {
  idToken: string;
  name?: string;
  session: string;
}

export interface IForgotPasswordRequest extends Pick<ILoginRequest, 'username'> {}

export interface IConfirmForgotPasswordRequest extends Pick<ILoginRequest, 'username' | 'password'> {
  code: string;
  name?: string;
}

export interface IConfirmCompleteForgotPasswordRequest {
  data: IConfirmForgotPasswordRequest;
}

export interface IRefreshTokenRequest {
  username: string;
}

export interface ICreateSessionResponse extends Pick<ILoginRequest, 'username'> {
  sessionToken: string;
}
