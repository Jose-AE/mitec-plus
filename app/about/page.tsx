"use client";

import { Flex, Stack } from "@chakra-ui/react";

import About from "../dashboard/components/About";

export default function Page() {
  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"}>
          <About />
        </Stack>
      </Flex>
    </>
  );
}
