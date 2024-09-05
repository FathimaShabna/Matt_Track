import React, { useEffect, useState } from "react";
import List from "@mui/material/List";

import NavVerticalGroup from "./VerticalNavGroup";
import VerticalCollapse from "./VerticalCollapse";
import VerticalItem from "./VerticalItem";
import { RouterConfigData } from "@crema/types/models/Apps";
import axios from "@crema/services/axios";
import { NextResponse } from "next/server";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import { UserData } from "@crema/types/models/AuthUser";

type Props = {
  routesConfig: RouterConfigData[];
};

const VerticalNav: React.FC<Props> = ({ routesConfig }) => {
  const { user } = useAuthUser();
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`/get-user/${user?.email}`);
        setUserData(response.data);
      } catch (error) {
        console.log("Data Cannot Fetched", error);
      }
    };
    getUser();
  }, []);

  const filterRoutesByRole = (routes: any, roleToFilter: any) => {
    const filteredRoutes = routes.filter((route: any) => {
      if (route.allowedRoles && route.allowedRoles.includes(roleToFilter)) {
        return true;
      }
      if (route.children && route.children.length > 0) {
        const hasChildWithRole = route.children.some(
          (child: any) =>
            child.allowedRoles && child.allowedRoles.includes(roleToFilter)
        );

        return hasChildWithRole;
      }

      return false;
    });

    return filteredRoutes;
  };

  const filteredRoutes = filterRoutesByRole(
    routesConfig,
    userData?.role?.toLowerCase()
  );

  return (
    <List
      sx={{
        position: "relative",
        padding: 0,
      }}
      component="div"
    >
      {filteredRoutes?.map((item: RouterConfigData) => (
        <React.Fragment key={item.id}>
          {item.type === "group" && <NavVerticalGroup item={item} level={0} />}

          {item.type === "collapse" && (
            <VerticalCollapse item={item} level={0} />
          )}

          {item.type === "item" && <VerticalItem item={item} level={0} />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default VerticalNav;
