"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "./components/sidebar";

export default function ChakraUiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {true ? <SidebarWithHeader>{children}</SidebarWithHeader> : children}
      </ChakraProvider>
    </CacheProvider>
  );
}
