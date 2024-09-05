import React, { ReactNode } from "react";
import ThemeContextProvider from "./ThemeContextProvider";
import LocaleContextProvider from "./LocaleContextProvider";
import LayoutContextProvider from "./LayoutContextProvider";
import SidebarContextProvider from "./SidebarContextProvider";
import UserInfoContextProvider from "./UserInfoContextProvider";
// import UserInfoContextProvider from "./UserInfoContextProvider";

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  return (
    // <UserInfoContextProvider>
    <ThemeContextProvider>
      <LocaleContextProvider>
        <LayoutContextProvider>
          <SidebarContextProvider>
            
           {children}
           
          </SidebarContextProvider>
        </LayoutContextProvider>
      </LocaleContextProvider>
    </ThemeContextProvider>
    // </UserInfoContextProvider>
  );
};

export default AppContextProvider;
