"use client";

import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Modal,
  useToast,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";

import { setCookie } from "cookies-next";
import { MdOutlineCookie } from "react-icons/md";
import MitecLogo from "../dashboard/components/MitecLogo";
import { useState } from "react";
import Footer from "./footer";
import axios from "axios";
import TutorialCarousel from "./TutorialCarousel";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(0deg)"
        />
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mitec+ Demo</ModalHeader>

          <ModalBody>
            Estás por acceder al modo demo de Mitec+. Este modo te permite
            explorar la interfaz y todas las funcionalidades que Mitec+ ofrece,
            utilizando datos ficticios para representar clases y calificaciones.
            Si deseas visualizar tus datos reales, como tus calificaciones,
            horarios y clases, inicia sesión con tu cookie. Las instrucciones
            sobre cómo obtener la cookie se encuentran en el menú desplegable
            que dice “como obtener cookie”.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Regresar
            </Button>
            <Button
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
              Continuar en modo Demo
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
                        Que es la cookie?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Al ingresar a Mitec con tu cuenta, se crea un tipo de
                    &quot;credencial digital temporal&quot; (cookie) con datos
                    básicos como tu matrícula y la fecha de expiración, esta es
                    usada por Mitec+ para acceder a los servidores de Mitec y
                    acceder a cosas como tus calificaciones y horarios sin
                    necesidad de tener que ingresar tu contraseña en Mitec+.
                    Esta cookie, sólo se guarda en tu navegador y no es
                    compartida con nadie, expira en 1 hora y es firmada por
                    Mitec para prevenir falsificaciones.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Flex gap={3}>
                <Button w="50%" isDisabled={loading} onClick={onOpen}>
                  Explorar demo
                </Button>

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
