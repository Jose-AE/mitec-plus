"use client";

import {
  Flex,
  Box,
  Input,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  IconButton,
  InputLeftElement,
} from "@chakra-ui/react";

import { useRouter } from "next/navigation";

import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineUser,
} from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import MitecLogo from "../components/logo";
import { useState } from "react";
import Footer from "./footer";

export default function page() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Flex
        minH={{ base: `calc(100vh - ${230}px)`, md: `calc(100vh - ${80}px)` }}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"}>
          <Stack align={"center"}>
            <MitecLogo scale={0.25} />
            <Text fontSize="4xl">
              mi
              <Text as="b" color="gray.500">
                tec
              </Text>
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineUser color="gray.300" />
                </InputLeftElement>
                <Input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="Usuario"
                  type="email"
                />
              </InputGroup>

              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdLockOutline color="gray.300" />
                </InputLeftElement>
                <Input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Contraseña"
                  pr="40px"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement>
                  <IconButton
                    size="sm"
                    aria-label="Search database"
                    icon={
                      showPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )
                    }
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                </InputRightElement>
              </InputGroup>

              <Stack spacing={5}>
                <Button
                  onClick={() => {
                    router.push("/");
                  }}
                  isDisabled={username === "" || password === ""}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Ingresar
                </Button>
                <Flex flexDirection="column" gap={3} alignItems="center">
                  <Link
                    target="_blank"
                    href="https://miscuentas.tec.mx/sspr/public/ForgottenPassword"
                    color={"blue.400"}
                  >
                    Olvidaste tu contraseña?
                  </Link>
                  <Link
                    target="_blank"
                    href="https://tecprod.service-now.com/$sn-va-web-client-app.do?sysparm_default_topic=083128c347f29910676de567436d43a6&sysparm_portal=tec"
                    color={"blue.400"}
                  >
                    ¿Necesitas ayuda? Contáctanos
                  </Link>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
