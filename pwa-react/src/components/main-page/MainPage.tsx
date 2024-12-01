import * as React from "react";
import Helmet from "react-helmet";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppAppBar from "../common/AppAppBar.tsx";
import Hero from "./components/Hero.tsx";
import LogoCollection from "./components/LogoCollection.tsx";
import Highlights from "./components/Highlights.tsx";
import Pricing from "./components/Pricing.tsx";
import Features from "./components/Features.tsx";
import Testimonials from "./components/Testimonials.tsx";
import FAQ from "./components/FAQ.tsx";
import Footer from "../common/Footer.tsx";
import AppTheme from "../common/shared-theme/AppTheme.tsx";

export default function MainPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <Helmet>
        <title>JustMine - Main Page</title>
      </Helmet>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
