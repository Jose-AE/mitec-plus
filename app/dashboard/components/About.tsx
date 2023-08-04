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

export default function About() {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs">Qué es Mitec+?</Heading>
            <Text pt="2" fontSize="sm">
              Mitec+ es una versión mejorada de la plataforma Mitec. Con una
              interfaz intuitiva y fácil de usar, los estudiantes pueden navegar
              sin dificultades y acceder rápidamente a la información y
              funciones necesarias. Desde calificaciones y horarios hasta su ID
              digital, Mitec+ ofrece una experiencia amigable y completa.
              Además, su eficiencia se refleja en un sistema optimizado que
              responde rápidamente a las necesidades de los estudiantes, con
              tiempos de carga mejorados, rendimiento optimizado y accesibilidad
              mejorada. Esto asegura que los estudiantes puedan acceder
              ágilmente a sus recursos sin demoras ni complicaciones
              innecesarias.
            </Text>
          </Box>
          <Box>
            <Heading size="xs">Por qué?</Heading>
            <Text pt="2" fontSize="sm">
              Hablemos de la plataforma de Mitec. Honestamente, es un desastre
              total, es complicada de usar, se cae y se traba constantemente y
              honestamente está toda mal hecha. Por eso decidí reconstruir la
              plataforma desde cero para que sea mucho más fácil de navegar, más
              rápida y, sobre todo: funcional. Ya no tendrás que sufrir con
              tiempos de carga largos ni perder tiempo intentando buscar esa
              información crucial sobre tus calificaciones o horarios. Con
              Mitec+, todo estará a solo un par de clics de distancia.
            </Text>
          </Box>
          <Box>
            <Heading size="xs">Limitaciones</Heading>
            <Text pt="2" fontSize="sm">
              Las sesiones siguen durando muy poco, el tiempo que pasa hasta que
              te vuelva a pedir que ingreses tu cuenta(cookie) es de
              aproximadamente 1 hora, esto es por que los de Mitec decidieron
              ponerle una expiración muy corta a las sesiones, por eso Mitec te
              pide a cada rato que re-ingreses tu cuenta.
              <br />
              <br />
              Mitec+ continúa utilizando los servidores de Mitec, por lo que si
              no te salen algunas calificaciones o clases, es probable que se
              deba a problemas con sus servidores (es decir tampoco en el sitio
              oficial de mitec te van a aparecer). Si esto llegara a ocurrir, te
              recomendamos intentar ingresar nuevamente a Mitec+ más tarde.
            </Text>
          </Box>
          <Box>
            <Heading size="xs">Creador</Heading>
            <Text pt="2" fontSize="sm">
              Soy José, un joven de 19 años que actualmente está empezando
              tercer semestre de la carrera de Ingeniería en Tecnologías
              Computacionales. Durante las vacaciones, estaba aburrido, así que
              decidí que mi próximo proyecto personal iba a ser rehacer la
              página de Mitec de manera correcta y funcional, surgiendo así
              Mitec+. Desarrollé Mitec+ en aproximadamente una semana utilizando
              el framework de Next.js 13 con React, empleando Typescript y la
              librería de componentes Chakra UI. Si estás interesado en revisar
              el código, puedes encontrarlo disponible en mi perfil de{" "}
              <Link
                href="https://github.com/Jose-AE/mitec-plus"
                color="blue.400"
                target={"_blank"}
                _hover={{ color: "blue.500" }}
              >
                Github
              </Link>
              <br />
              <br />
              La plataforma de Mitec+ no está afiliada, asociada, autorizada,
              respaldada por, ni de ninguna manera oficialmente conectada con la
              página web oficial de Mitec (https://mitec.itesm.mx), más allá del
              uso de su API pública.
              <br />
              Puedes contactarme a través de{" "}
              <Link
                href="contactomitecplus@gmail.com"
                color="blue.400"
                target={"_blank"}
                _hover={{ color: "blue.500" }}
              >
                contactomitecplus@gmail.com
              </Link>{" "}
              para cualquier duda o sugerencia.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
