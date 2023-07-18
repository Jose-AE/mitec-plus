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
  //-------------------------------------Chrome desktop--------------------------------------------------- */
  chrome: {
    desktop: [
      {
        image: "Tutorials/Desktop/Chrome/1.png",
        info: (
          <>
            Presiona <Kbd>CTRL/⌘ + D</Kbd> o haz click en la estrella al final
            de la barra de busqueda. Esto va a abrir el menú para agregar un
            marcador, En carpeta selecciona &quot;Barra De Marcadores&quot; y
            haz click en el Botón de &quot;Mas&quot;
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/2.png",
        info: (
          <>
            En la sección de URL, elimina el contenido actual y copia y pega el
            siguiente codigo
            <Button
              m="4px"
              size={"sm"}
              onClick={() => {
                navigator.clipboard.writeText(bookmarkCode);
              }}
              zIndex={10}
              leftIcon={<BiClipboard />}
              variant="solid"
            >
              Copiar codigo
            </Button>
            <br />
            finalmente haz click en guardar
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/3.png",
        info: (
          <>
            <Text fontSize={"sm"}>
              En la barra de marcadores debería aparecer. Si no ves la barra,
              presiona <Kbd>CTRL/⌘ + SHIFT + B</Kbd>. Haz clic en el marcador
              para acceder rápidamente a la página de Mitec. Este atajo te
              ahorrará tiempo, pero no es necesario utilizarlo para cargar la
              página de Mitec. Puedes ingresar directamente a la página y luego
              continuar con el siguiente paso.
            </Text>
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/4.png",
        info: (
          <>
            Ya que estes en el tablero de Mitec haz click en el marcador que
            creaste, para que se muestre tu cookie y se copie automaticamente,
            haz click en aceptar y automaticamente regresaras a Mitec+ para
            poder pegar tu cookie
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/3.png",
        info: (
          <>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            qué hacer click en el marcador y ya que estes en la página de inicio
            de mitec haz click denuevo en el marcador para copiar to cookie y
            regresar a Mitec+
          </>
        ),
      },
    ],
    //-------------------------------------Chrome Mobile--------------------------------------------------- */
    mobile: [
      {
        image: "Tutorials/Mobile/Chrome/1.png",
        info: (
          <>Haz click en los 3 puntos que se encuntran arriba a la derecha</>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/2.png",
        info: <>Haz click en la estrella, esto va a crear un marcador</>,
      },
      {
        image: "Tutorials/Mobile/Chrome/3.png",
        info: (
          <>
            Ahora hasta abajo va a salir un mesaje diciendo que se salvo el
            marcador, haz click en el boton de editar
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/4.png",
        info: (
          <>
            En carpeta selecciona &quot;Marcadores de movil&quot; y en la
            sección de URL, elimina el contenido actual y copia y pega el
            siguiente codigo
            <Button
              m="4px"
              size={"sm"}
              onClick={() => {
                navigator.clipboard.writeText(bookmarkCode);
              }}
              zIndex={10}
              leftIcon={<BiClipboard />}
              variant="solid"
            >
              Copiar codigo
            </Button>
            <br />
            finalmente haz click en la flecha para salvar
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/5.png",
        info: (
          <>
            Entra a la pagina de Mitec con tu cuenta y ya que estes en el
            tablero principal haz click en la barra de busqueda y busca el
            nombre que le pusiste al marcador, finalmente haz click en el
            marcador
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/6.png",
        info: (
          <>
            Ya que hiciste click en el marcador tu cookie se va a copiar
            automaticamente y te va a aparecer un mensaje de que se copio(en
            caso de que no se haya copiado la puedes copiar
            manualmente),finalmente haz click en &quot;ok&quot; y
            automaticamente te va a redirigir a Mitec+ para que la pegues.
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/5.png",
        info: (
          <>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            qué ingresar a la pagina de inicio de Mitec y en la barra de
            busqueda buscar el nombre del marcador que creaste y hacer click en
            el para copiar tu cookie.
          </>
        ),
      },
    ],
  },
  //-------------------------------------Firefox desktop--------------------------------------------------- */
  firefox: {
    desktop: [
      {
        image: "Tutorials/Desktop/Firefox/1.png",
        info: (
          <>
            Presiona <Kbd>CTRL/⌘ + D</Kbd> o haz click en la estrella al final
            de la barra de busqueda. Esto va a abrir el menú para agregar un
            marcador, En carpeta selecciona &quot;Barra De Marcadores&quot; y
            haz click en el Botón de &quot;Salvar&quot;
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/2.png",
        info: (
          <>
            Ahora en la barra de marcadores te deberia de aparecer el marcador,
            si no te aparece la barra presiona <Kbd>CTRL/⌘ + SHIFT + B</Kbd> Haz
            click derecho en el marcador y seleciona editar marcador.
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/3.png",
        info: (
          <>
            En la sección de URL, elimina el contenido actual y copia y pega el
            siguiente codigo
            <Button
              m="4px"
              size={"sm"}
              onClick={() => {
                navigator.clipboard.writeText(bookmarkCode);
              }}
              zIndex={10}
              leftIcon={<BiClipboard />}
              variant="solid"
            >
              Copiar codigo
            </Button>
            <br />
            finalmente haz click en guardar
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/4.png",
        info: (
          <>
            Ahora haz click en el marcador, este te va a llevar a la pagina de
            Mitec, esto es para salvar tiempo, no nesesitas usar este atajo para
            cargar la pagina de Mitec, puedes solo ingresar directamente y
            despues seguir al siguiente paso
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/5.png",
        info: (
          <>
            Ya que estes en el tablero de Mitec haz click en el marcador que
            creaste, para que se muestre tu cookie y se copie automaticamente,
            haz click en aceptar y automaticamente regresaras a Mitec+ para
            poder pegar tu cookie
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/4.png",
        info: (
          <>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            qué hacer click en el marcador y ya que estes en la página de inicio
            de mitec haz click denuevo en el marcador para copiar to cookie y
            regresar a Mitec+
          </>
        ),
      },
    ],
    mobile: [{ image: "", info: "" }],
  },
  safari: {
    //-------------------------------------Safari desktop--------------------------------------------------- */

    desktop: [{ image: "", info: "" }],

    //-------------------------------------Safari Mobile--------------------------------------------------- */

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
