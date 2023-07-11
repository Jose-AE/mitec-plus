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
  useDisclosure,
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
} from "@chakra-ui/react";

import { setCookie } from "cookies-next";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { MdLockOutline, MdOutlineCookie } from "react-icons/md";
import MitecLogo from "../dashboard/components/MitecLogo";
import { useState, ReactNode } from "react";
import Footer from "./footer";
import axios from "axios";

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

  function getBrowserInstructions() {
    const bookmarkCode =
      "javascript: (function () {var e = document.createElement('textarea');document.body.appendChild(e);e.value = `'${document.cookie.match(/Epsilon=([^;]+)/)[1]}'`;e.select();document.execCommand('copy');document.body.removeChild(e);alert('Cookie copiada');})();";

    const instructions: any = {
      chrome: {
        desktop: [
          <ListItem>
            Presiona <Kbd>CTRL + D</Kbd>
          </ListItem>,
          <ListItem>
            En <Code>carpeta</Code> seleciona:
            <Code>BarraDeMarcadores</Code>
          </ListItem>,
          <ListItem>
            Haz click en el boton de <Badge variant="outline">Mas</Badge>
          </ListItem>,
          <ListItem>
            De nombre ponle lo que quieras(ej: ObtenerCookieMitec)
          </ListItem>,
          <ListItem>
            Borra el URL y pega el siguiente codigo: <Code>{bookmarkCode}</Code>
          </ListItem>,
          <ListItem>
            Haz click en el boton de <Badge variant="outline">Salvar</Badge>
          </ListItem>,
          <ListItem>
            Presiona <Kbd>CTRL + SHIFT + B</Kbd> para mostrar la barra de
            bookmarks
          </ListItem>,
        ],
        mobile: [],
      },
      firefox: { desktop: ["Hello"], mobile: [] },
      safari: { desktop: ["Hello"], mobile: [] },
      opera: { desktop: ["Hello"], mobile: [] },
      edge: { desktop: ["Hello"], mobile: [] },
      default: [
        <ListItem>
          Ingresa a{" "}
          <Link color="blue.500" href="https://mitec.itesm.mx" isExternal>
            Mitec <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          e ingresa con tu cuenta
        </ListItem>,
        <ListItem>
          Cuando estes en el tablero presiona <Kbd>F12</Kbd>
        </ListItem>,
        <ListItem>
          Ingresa el siguiente comando en la consola:{" "}
          <Code>document.cookie.match(/Epsilon=([^;]+)/)[1]</Code>
        </ListItem>,
        <ListItem>
          Esto va a imprimir tu cookie, copiala y pegala arriba
        </ListItem>,
      ],
    };

    return instructions.default; ////////////////////

    var userAgent = navigator.userAgent;
    var browserName;

    if (userAgent.indexOf("Firefox") > -1) {
      browserName = "firefox";
    } else if (userAgent.indexOf("Chrome") > -1) {
      browserName = "chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "safari";
    } else if (
      userAgent.indexOf("Opera") > -1 ||
      userAgent.indexOf("OPR") > -1
    ) {
      browserName = "opera";
    } else if (userAgent.indexOf("Edge") > -1) {
      browserName = "edge";
    } else if (userAgent.indexOf("Trident") > -1) {
      browserName = "Internet Explorer";
    } else {
      browserName = "Unknown Browser";
    }

    if (userAgent.indexOf("Win") > -1) {
      return instructions[browserName].desktop;
    } else if (userAgent.indexOf("Mac") > -1) {
      return instructions[browserName].desktop;
    } else if (userAgent.indexOf("Linux") > -1) {
      return instructions[browserName].desktop;
    } else if (userAgent.indexOf("Android") > -1) {
      return instructions[browserName].mobile;
    } else if (userAgent.indexOf("iOS") > -1) {
      return instructions[browserName].mobile;
    } else {
      return instructions.default;
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
                    <UnorderedList>
                      {getBrowserInstructions().map((item: any) => item)}
                    </UnorderedList>
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
                  w="50%"
                  isLoading={loading}
                  isDisabled={userCookie === ""}
                  onClick={verifyCookie}
                  colorScheme="blue"
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

// javascript: (function () {
//   var e = document.createElement("textarea");
//   document.body.appendChild(e);
//   e.value = `'${document.cookie.match(/Epsilon=([^;]+)/)[1]}'`;
//   e.select();
//   document.execCommand("copy");
//   document.body.removeChild(e);
//   alert("Cookie copiada");
// })();
