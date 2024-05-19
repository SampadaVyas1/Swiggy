// import axiosClient from 'services/HttpClient';
import axiosClient from "../../HttpClient";
import AUTH, { EUserType } from "./constants";
import {
  IConfirmForgotPasswordRequest,
  ICreateSessionResponse,
  IForgotPasswordRequest,
  ILoginCompleteSignUpResponseData,
  ILoginRequest,
} from "./interfaces";
import axios from "axios";

export const login = async (credentials: ILoginRequest): Promise<string> => {
  // const response = await axiosClient.post(`${AUTH.signIn}`, credentials);
  const response = await axiosClient.get(`${AUTH.signIn}`);
  // const result = response.data.token;
  const result = "8784863vd74dh7477hz";
  return result;
};

export const completeSignUp = async (
  credentials: Partial<IConfirmForgotPasswordRequest & { token: string }>,
  userType: EUserType
): Promise<ILoginCompleteSignUpResponseData> => {
  let response;
  if (userType === EUserType.ADMIN)
    response = await axiosClient.post(`${AUTH.admin}`, credentials);
  else if (userType === EUserType.USER)
    response = await axiosClient.post(
      `${AUTH.completeSignupUser}`,
      credentials
    );
  else throw new Error("Invalid user type");
  const result = response.data;
  return result;
};

export const getAccountByToken = async (
  token: string,
  userType: EUserType
): Promise<ILoginCompleteSignUpResponseData> => {
  let response;
  if (userType === EUserType.ADMIN)
    response = await axiosClient.get(`${AUTH.admin}/${token}`);
  else if (userType === EUserType.USER)
    response = await axiosClient.get(`${AUTH.user}/${token}`);
  else throw new Error("Invalid user type");
  const result = response.data.data;
  return result;
};

export const createAccount = async (
  credentials: IConfirmForgotPasswordRequest
): Promise<ILoginCompleteSignUpResponseData> => {
  const response = await axiosClient.post(`${AUTH.admin}`, credentials);
  const result = response.data;
  return result;
};

export const forgotPassword = async (
  credentials: IForgotPasswordRequest
): Promise<{ email: string }> => {
  const response = await axiosClient.post(
    `${AUTH.forgotPassword}`,
    credentials
  );
  const result = response.data;
  return result;
};

export const createSessionToken = async (
  token: string
): Promise<ICreateSessionResponse> => {
  const response = await axiosClient.post(`${AUTH.sessionToken}/${token}`);
  const result = response.data.data;
  return result;
};

export const getRefreshToken = async (
  refreshToken: string,
  requestBody: {
    username: string;
  }
): Promise<
  Pick<
    ILoginCompleteSignUpResponseData,
    "accessToken" | "idToken" | "refreshToken"
  >
> => {
  const response = await axios.post(`${""}${AUTH.refreshToken}`, requestBody, {
    //TODO: Need to add a Base URL
    headers: {
      refreshtoken: refreshToken,
    },
  });
  const result = response.data.data;
  return result;
};
