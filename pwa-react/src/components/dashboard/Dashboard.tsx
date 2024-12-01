import { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";
import type {} from "@mui/x-data-grid/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import SideMenu from "./components/SideMenu";
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
      <AppTheme themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: "flex" }}>
          <Skeleton width={240} height="100vh" /> {/* SideMenu 스켈레톤 */}
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Skeleton height={64} width="100%" /> {/* AppNavbar 스켈레톤 */}
            <Stack
              spacing={2}
              sx={{
                alignItems: "center",
                mx: 3,
                pb: 5,
                mt: { xs: 8, md: 0 },
              }}
            >
              <Skeleton height={64} width="100%" /> {/* Header 스켈레톤 */}
              <Skeleton height={400} width="100%" /> {/* MainGrid 스켈레톤 */}
            </Stack>
          </Box>
        </Box>
      </AppTheme>
    );
  }

  return (
    <AppTheme themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
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
