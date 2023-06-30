"use client";

import {
  Flex,
  Box,
  Stack,
  Text,
  Card,
  Heading,
  CardBody,
  StackDivider,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";

export default function Page() {
  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"}>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs">Qué es Mitec+?</Heading>
                  <Text pt="2" fontSize="sm">
                    Mitec+ es una versión mejorada de la plataforma Mitec. Con
                    una interfaz intuitiva y fácil de usar, los estudiantes
                    pueden navegar sin dificultades y acceder rápidamente a la
                    información y funciones necesarias. Desde calificaciones y
                    horarios hasta su ID digital, Mitec+ ofrece una experiencia
                    amigable y completa. Además, su eficiencia se refleja en un
                    sistema optimizado que responde rápidamente a las
                    necesidades de los estudiantes, con tiempos de carga
                    mejorados, rendimiento optimizado y accesibilidad mejorada.
                    Esto asegura que los estudiantes puedan acceder ágilmente a
                    sus recursos sin demoras ni complicaciones innecesarias.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs">Por qué?</Heading>
                  <Text pt="2" fontSize="sm">
                    Hablemos de la plataforma de Mitec. Honestamente, es un
                    desastre total, es complicada de usar, se cae y se traba
                    constantemente y honestamente está toda mal hecha. Por eso
                    decidí reconstruir la plataforma desde cero para que sea
                    mucho más fácil de navegar, más rápida y, sobre todo:
                    funcional. Ya no tendrás que sufrir con tiempos de carga
                    largos ni perder tiempo intentando buscar esa información
                    crucial sobre tus calificaciones o horarios. Con Mitec+,
                    todo estará a solo un par de clics de distancia.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs">Limitaciones</Heading>
                  <Text pt="2" fontSize="sm">
                    No tengo acceso al API oficial del TEC, entonces tuve que
                    crear mi propia API mediante el uso de ingeniería
                    inversa(reverse engineering) de la página de Mitec. Por eso
                    hay varias cosas y funciones que no puedo implementar en
                    Mitec+, pero como no son tan usadas no importa tanto.
                    <br />
                    <br />
                    Las sesiones siguen durando muy poco, el tiempo que pasa
                    hasta que te vuelva a pedir que ingreses tu cuenta(cookie)
                    es de aproximadamente 1 hora, esto es por que los de Mitec
                    decidieron ponerle una expiración muy corta a las sesiones,
                    por eso Mitec te pide a cada rato que re-ingreses tu cuenta.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs">Creador</Heading>
                  <Text pt="2" fontSize="sm">
                    Soy José, un joven de 19 años que actualmente terminó el
                    segundo semestre de la carrera de Ingeniería en Tecnologías
                    Computacionales, si leiste bien, 2ndo es decir no he visto
                    absolutamente nada relacionado a mi carrera (solo como 2
                    clases de programacion basica) solo he llevado clases de
                    física, matemáticas, etc, en resumen una pérdida abismal de
                    dinero y tiempo. Como ya son vacaciones y estoy aburrido
                    decidí que mi próximo proyecto personal iba a ser rehacer la
                    página de Mitec de manera correcta y funcional y de ahí
                    surgió Mitec+.
                    <br />
                    <br />
                    Me resulta incomprensible cómo una institución educativa de
                    renombre, como el TEC y que cuenta con un presupuesto
                    considerable (Considerando cuánto pagamos en el tronco común
                    para clases que no sirven de nada), no haya logrado mejorar
                    su infraestructura web. Con tantos recursos económicos
                    disponibles, sería de esperar que la institución invierta en
                    la actualización y optimización de su infraestructura
                    digital. La falta de mejoras en las páginas web del TEC es
                    una clara evidencia de una gestión ineficiente de los
                    recursos y una falta de atención a las necesidades de los
                    estudiantes. Literalmente me tarde 1 semana en hacer Mitec+
                    y soy una sola persona y aparte de eso voy en segundo
                    semestre de la carrera, cómo es que un equipo de varias
                    personas con mucho más experiencia(?) no pueden hacer algo
                    mejor?
                    <br />
                    <br />
                    Desarrolle Mitec+ utilizando el framework de Next.js 13 con
                    React, empleando Typescript y la librería de componentes
                    Chakra UI. Si estás interesado en revisar el código, puedes
                    encontrarlo disponible en mi perfil de{" "}
                    <Link
                      href="https://github.com/Jose-AE/mitec-plus"
                      color="blue.400"
                      target={"_blank"}
                      _hover={{ color: "blue.500" }}
                    >
                      Github
                    </Link>
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Flex>
    </>
  );
}
