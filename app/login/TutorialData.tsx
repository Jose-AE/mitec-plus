import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Code,
  IconButton,
  Kbd,
  Link,
  ListItem,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { BiClipboard } from "react-icons/bi";

const bookmarkCode = `
javascript: (function () {
  if (window.location.href.includes("mitec.itesm.mx/Paginas")) {
    var e = document.createElement("textarea");
    document.body.appendChild(e);
    e.value = "'" + document.cookie.match(/Epsilon=([^;]+)/)[1] + "'";
    e.select();
    document.execCommand("copy");
    document.body.removeChild(e);
    prompt("Cookie copiada", e.value);
    window.location.href = "${process.env.NEXT_PUBLIC_DOMAIN}";
  } else window.location.href = "https://mitec.itesm.mx/";
})();
`;

const TutorialData: any = {
  chrome: {
    desktop: [
      {
        image: "Tutorials/Desktop/Chrome/1.png",
        info: (
          <Text>
            Presiona <Kbd>CTRL + D</Kbd> esto va a abrir el menú para agregar un
            marcador, En carpeta selecciona "Barra De Marcadores" y haz click en
            el Botón de "Mas"
          </Text>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/2.png",
        info: (
          <Text>
            Haz click en este botón{" "}
            <IconButton
              size={"sm"}
              aria-label="Search database"
              icon={<BiClipboard />}
              onClick={() => {
                navigator.clipboard.writeText(bookmarkCode);
              }}
            />
            {"   "}para copiar el codigo, despues borra el URL y pega el código,
            finalmente haz click en guardar
          </Text>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/3.png",
        info: (
          <Text>
            Ahora en la barra de marcadores te deberia de aparecer el marcador,
            si no te aparece la barra presiona <Kbd>CTRL/⌘ + SHIFT + B</Kbd>{" "}
            Cuando hagas click en el marcador este te llevara a la página de
            Mitec
          </Text>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/4.png",
        info: (
          <Text>
            Ya que estes en la página principal de mitec, haz click en el
            marcador otra vez, esto va a mostrar tu cookie y copiarla
            automáticamente, haz click en aceptar y automaticamente regresaras a
            Mitec+ para poder pegarla
          </Text>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/3.png",
        info: (
          <Text>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            qué hacer click en el marcador y ya que estes en la página de inicio
            de mitec haz click denuevo en el marcador para copiar to cookie y
            regresar a Mitec+
          </Text>
        ),
      },
    ],
    mobile: [
      {
        image: "Tutorials/Mobile/Chrome/1.png",
        info: (
          <Text>
            Haz click en los 3 puntos que se encuntran arriba a la derecha
          </Text>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/2.png",
        info: (
          <Text>Haz click en la estrella, esto va a crear un marcador</Text>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/3.png",
        info: (
          <Text>
            Ahora hasta abajo va a salir un mesaje diciendo que se salvo el
            marcador, haz click en el boton de editar
          </Text>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/4.png",
        info: (
          <Text>
            En carpeta selecciona "Marcadores de movil" despues haz click en
            este botón{" "}
            <IconButton
              size={"sm"}
              aria-label="Search database"
              icon={<BiClipboard />}
              onClick={() => {
                navigator.clipboard.writeText(bookmarkCode);
              }}
            />
            {"   "}para copiar el codigo, despues borra el URL y pega el código,
            finalmente haz click en la flecha para guardar
          </Text>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/5.png",
        info: (
          <Text>
            Entra a la pagina de Mitec con tu cuenta y ya que estes en la pagina
            de inicio(donde salen los anuncios etc.) haz click en la barra de
            busqueda y busca el nombre que le pusiste al marcador, finalmente
            haz click en el marcador
          </Text>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/6.png",
        info: (
          <Text>
            Ya que hiciste click en el marcador tu cookie se va a copiar
            automaticamente y te va a aparecer un mensaje de que se copio(en
            caso de que no se haya copiado la puedes copiar
            manualmente),finalmente haz click en "ok" y automaticamente te va a
            redirigir a Mitec+ para que la pegues.
          </Text>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/5.png",
        info: (
          <Text>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            qué ingresar a la pagina de inicio de Mitec y en la barra de
            busqueda buscar el nombre del marcador que creaste y hacer click en
            el para copiar tu cookie.
          </Text>
        ),
      },
    ],
  },
  firefox: {
    desktop: [{ image: "", info: "" }],
    mobile: [{ image: "", info: "" }],
  },
  safari: {
    desktop: [{ image: "", info: "" }],
    mobile: [{ image: "", info: "" }],
  },
  opera: {
    desktop: [{ image: "", info: "" }],
    mobile: [{ image: "", info: "" }],
  },
  edge: {
    desktop: [{ image: "", info: "" }],
    mobile: [{ image: "", info: "" }],
  },
  default: [
    {
      image: "Tutorials/Default.png",
      info: (
        <Text>
          Ingresa a{" "}
          <Link color="blue.500" href="https://mitec.itesm.mx" isExternal>
            Mitec <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          e ingresa con tu cuenta Cuando estes en el tablero presiona{" "}
          <Kbd>F12</Kbd> Ingresa el siguiente comando en la consola:{" "}
          <Code>document.cookie.match(/Epsilon=([^;]+)/)[1]</Code> Esto va a
          imprimir tu cookie, copiala y pegala arriba
        </Text>
      ),
    },
  ],
};

export default TutorialData;
