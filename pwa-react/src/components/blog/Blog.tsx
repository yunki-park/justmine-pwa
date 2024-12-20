import * as React from "react";
import { Helmet } from "react-helmet";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppAppBar from "../common/AppAppBar.tsx";
import MainContent from "./components/MainContent.tsx";
import Latest from "./components/Latest.tsx";
import Footer from "../common/Footer.tsx";
import AppTheme from "../common/shared-theme/AppTheme.tsx";

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <Helmet>
        <title>JustMine - Blog</title>
      </Helmet>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </AppTheme>
  );
}
