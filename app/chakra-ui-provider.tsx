"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "./components/sidebar";

import { extendTheme } from "@chakra-ui/react";
import "@fontsource/apfel-grotezk";
import "@fontsource/roboto";
import "@fontsource-variable/inter";
const theme = extendTheme({
  fonts: {
    heading: `'Inter Variable', sans-serif`,
    body: `'Inter Variable', sans-serif`,
  },
});

export default function ChakraUiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {true ? <SidebarWithHeader>{children}</SidebarWithHeader> : children}
      </ChakraProvider>
    </CacheProvider>
  );
}
