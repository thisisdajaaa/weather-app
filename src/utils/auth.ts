import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import { AUTH0_CLIENT_ID, AUTH_CLIENT_DOMAIN } from "@env";
import { storage } from "./storage";
import { Platform } from "react-native";
import { AuthSessionData } from "@app/types/auth";

const authClient = () => {
  /**
   * Decrypt Auth0 access token and store in storage
   * @param authSessionData
   * @returns void
   */
  const secureAuthToken = async (
    authSessionData: AuthSessionData,
    dispatchedAction: () => void
  ) => {
    try {
      const { authRequest, discovery, redirectUrl } = authSessionData;

      // Get the authorization code
      const authorizeResult = await authRequest.promptAsync(discovery, {
        useProxy: true,
      });

      if (authorizeResult.type === "success") {
        // Exchange the code for an access token
        const tokenResult = await AuthSession.exchangeCodeAsync(
          {
            code: authorizeResult.params.code,
            clientId: AUTH0_CLIENT_ID,
            redirectUri: redirectUrl,
            extraParams: {
              code_verifier: authRequest.codeVerifier || "",
            },
          },
          discovery
        );

        const decodedInformation = jwtDecode(String(tokenResult.idToken));

        await storage.storeObject("user", decodedInformation);
        dispatchedAction();
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Triggers Auth0 Login
   * @param dispatchedAction
   * @returns void
   */
  const login = async (dispatchedAction: () => void) => {
    try {
      const discovery = await AuthSession.fetchDiscoveryAsync(
        AUTH_CLIENT_DOMAIN
      );

      const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });

      const authRequestOptions: AuthSession.AuthRequestConfig = {
        responseType: AuthSession.ResponseType.Code,
        clientId: AUTH0_CLIENT_ID,
        redirectUri: redirectUrl,
        prompt: AuthSession.Prompt.Login,
        scopes: ["openid", "profile", "email", "identity"],
        extraParams: {
          // ideally, this will be a random value
          nonce: "nonce",
        },
      };

      const authRequest = new AuthSession.AuthRequest(authRequestOptions);

      const authSession: AuthSessionData = {
        authRequest,
        discovery,
        redirectUrl,
      };

      await secureAuthToken(authSession, dispatchedAction);
    } catch (error) {
      console.error("AuthAction.login failed", error);
    }
  };

  /**
   * Clears user info in storage
   * @returns void
   */
  const logout = async () => {
    try {
      Platform.OS === "ios" && AuthSession.dismiss();
      await storage.deleteKey("user");
    } catch (error) {
      console.error(error);
    }
  };

  return { login, logout };
};

export { authClient };
