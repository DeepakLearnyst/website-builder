/** @jsxImportSource theme-ui */

// import React from "react";

import { ThemeProvider } from "@theme-ui/theme-provider";
import { theme } from "../theme";

import HeaderInfo from "../molecules/HeaderInfo";

export default {
  title: "Header Information",
  component: HeaderInfo,
};

export const HeaderInformation = () => {console.log(theme)
return (
    <ThemeProvider theme={theme}>
        <HeaderInfo></HeaderInfo>
    </ThemeProvider>
)}
