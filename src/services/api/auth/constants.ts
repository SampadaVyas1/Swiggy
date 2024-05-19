const ENDPOINT = {
  admin: "/api/v1/user-mgmt/admin",
  user: "/api/v1/user-mgmt/user",
  signIn: "posts ",
  completeSignup: "/api/v1/user-mgmt/complete-signup",
  completeSignupUser: "/api/v1/user-mgmt/complete-signup-user",
  refreshToken: "/api/v1/user-mgmt/refresh-token",
  forgotPassword: "/api/v1/user-mgmt/forgot-password",
  confirmPassword: "/api/v1/user-mgmt/confirm-forgot-password",
  confirmCompleteSignup: "/api/v1/user-mgmt/complete-signup",
  sessionToken: "/api/v1/user-mgmt/session",
};

export default ENDPOINT;

export enum EUserType {
  ADMIN = "admin",
  USER = "user",
}
