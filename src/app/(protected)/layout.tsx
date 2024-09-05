"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthUser } from "../../@crema/hooks/AuthHooks";
import AppLoader from "@crema/components/AppLoader";
import routesConfig from "@crema/core/AppRoutes/routeConfig";
import { Layouts } from "@crema/components/AppLayout";
import { useSidebarActionsContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import {
  useLayoutActionsContext,
  useLayoutContext,
} from "@crema/context/AppContextProvider/LayoutContextProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserData } from "@crema/types/models/AuthUser";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "../toolkit/store";
import StoreProvider from "../StoreProvider";

export default function RootLayout({ children }: any) {
  const { navStyle } = useLayoutContext();
  const AppLayout = Layouts[navStyle];

  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const searchParams = useSearchParams();

  const { user, isLoading } = useAuthUser();
  const router = useRouter();
  const layout = searchParams.get("layout");
  const menuStyle = searchParams.get("menuStyle");
  const sidebarImage = searchParams.get("sidebarImage");
  const queryParams = searchParams.toString();
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    if (user) {
      const getUser = async () => {
        try {
          const response = await axios.get(`/api/get-user/${user?.email}`);
          setUserData(response.data);
        } catch (error) {
          console.log("Data Cannot Fetched", error);
        }
      };
      getUser();
    }
  }, [user?.email]);

  const userRole = userData?.role;
  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/signin" + (queryParams ? "?" + queryParams : ""));
    }

    if (user && userRole) {
      let initialUrl = "";

      if (userRole.includes("MANAGER")) {
        initialUrl = "/manager/dashboard";
      } else if (userRole.includes("ADMIN")) {
        initialUrl = "/admin/dashboard";
      } else if (userRole.includes("EMPLOYEE")) {
        initialUrl = "/employee/dashboard";
      } else if (userRole.includes("TEAMLEAD")) {
        initialUrl = "/teamlead/dashboard";
      } else {
        initialUrl = "";
      }
      // Redirect to the user's dashboard
      router.push(initialUrl + (queryParams ? "?" + queryParams : ""));
    }
  }, [queryParams]);

  useEffect(() => {
    if (layout) updateNavStyle(layout);
    if (menuStyle) updateMenuStyle(menuStyle);
    if (sidebarImage) setSidebarBgImage(true);
  }, []);

  if (!user || isLoading) return <AppLoader />;

  return (
    <StoreProvider>
      {" "}
      <AppLayout routesConfig={routesConfig}>{children}</AppLayout>
    </StoreProvider>
  );
}
