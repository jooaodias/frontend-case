import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { IAuthenticatedUser } from "../../models";
import { getUserInfo } from "../../utils";

interface IUserContext {
  loggedUser: IAuthenticatedUser | null;
  setLoggedUser: (userInfo: IAuthenticatedUser | null) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const UserContext = React.createContext<IUserContext>(
  {} as IUserContext
);

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<IAuthenticatedUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const userDecoded = getUserInfo(localStorage.getItem("token") as string);

      setLoggedUser(userDecoded);
    }
  }, []);

  const logout = () => {
    setLoggedUser(null);
    localStorage.clear();
  };

  const providerValue = useMemo<IUserContext>(
    () => ({
      loggedUser,
      setLoggedUser,
      logout,
      setLoading,
    }),
    [loggedUser, setLoggedUser]
  );

  if (loading) return <div style={{ height: "100vh" }}></div>;

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
