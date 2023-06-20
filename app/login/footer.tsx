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
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
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
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
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
          <Link target="_blank" href="https://tec.mx/">
            © 2023 Tecnológico de Monterrey
          </Link>
          <Link target="_blank" href="https://tec.mx/es/avisos-de-privacidad">
            Aviso de privacidad
          </Link>

          <Link target="_blank" href="https://letica.mx/ETHOS">
            ETHOS
          </Link>
        </Flex>

        <Stack mt="10px" direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/TecdeMonterrey"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/user/ITESMedu"}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/tecdemonterrey/"}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/TecdeMonterrey/?fref=ts"}
          >
            <FaFacebook />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
