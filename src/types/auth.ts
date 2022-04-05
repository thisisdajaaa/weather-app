import * as AuthSession from "expo-auth-session";

export type UserInformation = {
  aud: string;
  auth_time: string;
  exp: number;
  iat: number;
  iss: string;
  name: string;
  nonce: string;
  picture: string;
  sub: string;
  updated_at: string;
};

export type AuthSessionData = {
  authRequest: AuthSession.AuthRequest;
  discovery: AuthSession.DiscoveryDocument;
  redirectUrl: string;
};
