import React from "react";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import { Box } from "@mui/material";
import AppImage from "../../../AppImage";

type AppLogoProps = {
  hasSidebarColor?: boolean;
};

const AppLogo2: React.FC<AppLogoProps> = ({ hasSidebarColor }) => {
  const { mode } = useSidebarContext();

  return (
    <Box
      sx={{
        height: { xs: 56, sm: 70 },
        padding: 2.5,
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        "& img": {
          height: { xs: 40, sm: 45 },
        },
      }}
      className="app-logo"
    >
      {hasSidebarColor && mode === "dark" ? (
        <>
          <AppImage
            src="/assets/images/logo-3.png"
            alt="crema-logo"
            width={60}
            height={60}
          />
          <span
            style={{
              marginLeft: "10px",
              fontWeight: 700,
              fontSize: "15px",
              fontFamily: "sans-serif",
              color: "#e79d2e",
            }}
          >
            Matt Engineering Solutions
          </span>
        </>
      ) : (
        <>
          <AppImage
            src="/assets/images/logo3.png"
            alt="crema-logo"
            width={45}
            height={40}
            style={{ borderRadius: "50%", border: "2px solid #e79d2e" }}
          />
          <span
            style={{
              marginLeft: "10px",
              fontWeight: 700,
              fontSize: "20px",
              fontFamily: "Catamaran",
              color: "#15478B",
            }}
          >
            Matt Engineering Solutions
          </span>
        </>
      )}
      {/* <Logo fill={theme.palette.primary.main} />
      <Box
        sx={{
          mt: 1,
          display: { xs: "none", md: "block" },
          "& svg": {
            height: { xs: 25, sm: 30 },
          },
        }}
      >
        <LogoText fill={alpha(theme.palette.text.primary, 0.8)} />
      </Box> */}
    </Box>
  );
};

export default AppLogo2;
