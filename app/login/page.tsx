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
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  FormLabel,
  FormControl,
  useToast,
} from "@chakra-ui/react";

import { useRouter } from "next/navigation";

import { getCookie, setCookie } from "cookies-next";

import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineUser,
} from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import MitecLogo from "../dashboard/components/MitecLogo";
import { useState } from "react";
import Footer from "./footer";
import axios from "axios";
import Info from "./Info";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userCookie, setUserCookie] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function verifyCookie() {
    let correctFormat = false;
    setLoading(true);
    try {
      const cleanedString = userCookie.slice(2, -2).replace(/\\/g, "");
      const cookieObj = JSON.parse(cleanedString);
      const exp = new Date(
        JSON.parse(Buffer.from(cookieObj.jW.split(".")[1], "base64").toString())
          .exp * 1000
      );

      setCookie(
        "token",
        JSON.stringify({
          JWT: cookieObj.jW,
          oAuth: cookieObj.oA,
        }),
        {
          expires: exp,
        }
      );
      correctFormat = true;
    } catch (error) {
      setLoading(false);
      if (!toast.isActive("format-error")) {
        toast({
          id: "format-error",
          title: "Cookie tiene formato incorrecto",
          description: `Asegúrate de que la cookie que has pegado tenga el siguiente formato (incluyendo comillas): \n\n'"{\\\\"i.......00}"'`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }

    if (correctFormat) {
      axios
        .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/user")
        .then((res) => {
          setLoading(false);
          setUserCookie("");
          localStorage.setItem("user_id", res.data.id);
          localStorage.setItem("user_name", res.data.name);

          router.push("/dashboard");
        })
        .catch((error) => {
          setLoading(false);
          if (!toast.isActive("server-error")) {
            toast({
              id: "server-error",
              title: "Error validando cookie",
              description:
                "Se produjo un error al validar la cookie, probablemente porque ha caducado. Intenta recargar la página de Mitec para obtener una nueva cookie.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        });
    }
  }

  return (
    <>
      <Modal isCentered motionPreset="scale" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Cookie</FormLabel>
              <Input
                type="text"
                autoComplete="off"
                isDisabled={loading}
                onChange={(e) => {
                  setUserCookie(e.target.value);
                }}
              />
            </FormControl>
            <Info />
          </ModalBody>

          <ModalFooter>
            <Button
              isDisabled={loading}
              mr={3}
              onClick={() => {
                setCookie("demo", "true");
                router.push("/dashboard");
              }}
            >
              Explorar demo
            </Button>
            <Button
              isLoading={loading}
              isDisabled={userCookie === ""}
              onClick={verifyCookie}
              colorScheme="blue"
            >
              Ingresar con cookie
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        minH={{ base: `calc(100vh - ${230}px)`, md: `calc(100vh - ${80}px)` }}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"}>
          <Stack align={"center"}>
            <MitecLogo scale={0.25} />
            <Flex fontSize="4xl">
              mi
              <Text as="b" color="gray.500">
                tec
              </Text>
              |<Text color="rgb(255, 153, 1)">Plus+</Text>
            </Flex>
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
                    onOpen();
                  }}
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
