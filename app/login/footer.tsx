"use client";

import {
  Box,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";
import { Link } from "@chakra-ui/next-js";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      target="_blank"
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Flex
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position={"fixed"}
      left="0"
      bottom={"0"}
      width={"100%"}
      zIndex={"-1"}
    >
      <Container
        as={Stack}
        minW={"100%"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          gap={8}
        >
          <Link target="_blank" href="/about">
            Sobre Mitec+
          </Link>
        </Flex>

        <Stack mt="10px" direction={"row"} spacing={6}>
          <SocialButton
            label={"Github"}
            href={"https://github.com/Jose-AE/mitec-plus"}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Flex>
  );
}
