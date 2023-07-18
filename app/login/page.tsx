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
  InputGroup,
  InputLeftElement,
  Modal,
  useBreakpointValue,
  useToast,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  UnorderedList,
  ListItem,
  Code,
  Kbd,
  Tooltip,
  Badge,
  IconButton,
} from "@chakra-ui/react";

import { setCookie } from "cookies-next";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { MdLockOutline, MdOutlineCookie } from "react-icons/md";
import MitecLogo from "../dashboard/components/MitecLogo";
import { useState, ReactNode } from "react";
import Footer from "./footer";
import axios from "axios";
import TutorialCarousel from "./TutorialCarousel";

export default function Page() {
  const toast = useToast();

  const [userCookie, setUserCookie] = useState("");
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
          demo: "false",
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

          window.location.href = "/dashboard";
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
            w={{ base: "350px", md: "450px" }}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdOutlineCookie color="gray.300" />
                </InputLeftElement>
                <Input
                  id="cookie_input"
                  onChange={(e) => {
                    setUserCookie(e.target.value);
                  }}
                  placeholder="Cookie"
                  type="text"
                />
              </InputGroup>

              <Accordion mt={"0px"} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Como obtener cookie
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {/* <UnorderedList>
                      {getBrowserInstructions().map((item: any, i: number) => (
                        <div key={i}>{item}</div>
                      ))}
                    </UnorderedList> */}
                    <TutorialCarousel />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        ¿Es seguro?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    ¡Sí! Una vez que ingreses tu cookie, esta se guardará
                    únicamente en tu navegador y no se enviará a ningún otro
                    lugar para su almacenamiento. Solo será utilizada para
                    obtener información como tus materias, calificaciones y
                    nombre. Además, en caso de que se llegara a filtrar, la
                    cookie tiene una fecha de expiración de 1 hora, por lo que
                    su utilidad sería limitada.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Flex gap={3}>
                <Tooltip
                  hasArrow
                  label="Por si solo quieres ver la interfaz y las funciones que ofrece Mitec +, se usarán datos de demostración precargados como clases y calificaciones"
                  bg="gray.300"
                  color="black"
                >
                  <Button
                    w="50%"
                    isDisabled={loading}
                    onClick={() => {
                      setLoading(true);
                      setCookie(
                        "token",
                        JSON.stringify({
                          JWT: "",
                          oAuth: "",
                          demo: "true",
                        })
                      );
                      window.location.href = "/dashboard";
                    }}
                  >
                    Explorar demo
                  </Button>
                </Tooltip>

                <Button
                  id="cookie_button"
                  w="50%"
                  isLoading={loading}
                  isDisabled={userCookie === ""}
                  onClick={verifyCookie}
                  colorScheme="blue"
                  fontSize={{ base: "xs", md: "md" }}
                >
                  Ingresar con cookie
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
