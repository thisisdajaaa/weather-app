import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectors } from "@app/redux/auth";
import { storage } from "@app/utils";
import type { UserInformation } from "@app/types/auth";

/**
 * Custom authentication hook responsible for
 * checking the user data and checking if
 * user is authenticated or not
 * @returns isAuthenticated, authData
 */
const useAuth = () => {
  const [authData, setAuthData] = useState<UserInformation | null>(null);
  const isAuthenticated = useSelector(selectors.isAuthenticated);

  useEffect(() => {
    const checkIsAuthenticated = async () => {
      const authData: UserInformation = await storage.getObject("user");
      setAuthData(authData);
    };

    checkIsAuthenticated();
  }, [isAuthenticated]);

  return { isAuthenticated, authData };
};

export default useAuth;
