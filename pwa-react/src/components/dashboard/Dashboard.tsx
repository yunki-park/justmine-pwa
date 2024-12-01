import { useState, useEffect } from "react";

import "react-loading-skeleton/dist/skeleton.css";

import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";
import type {} from "@mui/x-data-grid/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import AppAppBar from "../common/AppAppBar.tsx";
import AppNavbar from "./components/AppNavbar.tsx";
import Header from "./components/Header.tsx";
import MainGrid from "./components/MainGrid.tsx";
import SideMenu from "./components/SideMenu.tsx";
import AppTheme from "../common/shared-theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "./theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export interface DashboardLoadingProps {
  loading?: boolean;
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // 모든 리소스가 로드되었을 때 loading 상태를 false로 변경
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <SideMenu loading={loading} />
        {/* <AppNavbar loading={loading} /> */}
        {/* Main content */}
        <Box sx={{ flexGrow: 1, p: 3, gap: 4 }}>
          <AppNavbar loading={loading} />
          {/* <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          > */}
          <Header loading={loading} />
          <MainGrid loading={loading} />
          {/* </Stack> */}
        </Box>
      </Box>
    );
  }

  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Box sx={{ display: "flex", my: 16 }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
