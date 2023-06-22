"use client";

import {
  Badge,
  Box,
  Text,
  Button,
  Flex,
  Stack,
  Image,
  Heading,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ClassInterface from "./interfaces/ClassInterface";
import axios from "axios";
import { json } from "stream/consumers";
import TodaysClasses from "./components/TodaysClasses";

export default function page() {
  return (
    <>
      <Flex direction="column" gap="10px">
        <TodaysClasses />

        <Box
          bg="gray.200"
          h={`calc(100vh - ${200}px)`}
          overflowY="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            borderRadius="md"
            w="100%"
            h="70px"
            bg={useColorModeValue("white", "gray.900")}
            padding={5}
            direction="row"
            mb="10px"
          >
            <Text fontSize={{ base: "12px", md: "16px" }} as="b">
              Modelación de la ingeniería con
            </Text>
            <Text fontSize={{ base: "12px", md: "30px" }}>100</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
