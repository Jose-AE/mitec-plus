"use client";

import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
  ListItem,
  Link,
  Flex,
  Kbd,
  Code,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Info() {
  return (
    <Accordion mt={"10px"} allowMultiple>
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
            <ListItem>
              Ingresa a{" "}
              <Link color="blue.500" href="https://chakra-ui.com" isExternal>
                Mitec <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              e ingresa con tu cuenta
            </ListItem>
            <ListItem>
              Cuando estes en el tablero presiona <Kbd>F12</Kbd>
            </ListItem>
            <ListItem>
              Ingresa el siguiente comando en la consola:{" "}
              <Code>document.cookie.match(/Epsilon=([^;]+)/)[1]</Code>
            </ListItem>
            <ListItem>
              Esto va a imprimir tu cookie, copiala y pegala arriba
            </ListItem>
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
          ¡Sí! Una vez que ingreses tu cookie, esta se guardará únicamente en tu
          navegador y no se enviará a ningún otro lugar para su almacenamiento.
          Solo será utilizada para obtener información como tus materias,
          calificaciones y nombre. Además, en caso de que se llegara a filtrar,
          la cookie tiene una fecha de expiración de 1 hora, por lo que su
          utilidad sería limitada.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
