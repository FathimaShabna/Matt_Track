"use client";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import axios from "@crema/services/axios";
import { UserData } from "@crema/types/models/AuthUser";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext<UserData | null>(null);

const UserInfoContextProvider = function ({ children }: any) {
  const { user } = useAuthUser();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const roleChange = async () => {
      try {
        const response = await axios.get(`/get-user/${user?.email}`);
        setUserData(response.data);
      } catch (errr) {
        console.error(errr);
      }
    };
    roleChange();
  }, []);
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserInfoContextProvider;
