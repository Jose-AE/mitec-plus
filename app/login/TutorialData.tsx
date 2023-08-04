import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Code,
  IconButton,
  Kbd,
  ListItem,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { BiClipboard } from "react-icons/bi";
import { Link } from "@chakra-ui/next-js";

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
            Presiona <Kbd>CTRL/⌘ + D</Kbd> o haz clic en la estrella al final de
            la barra de busqueda. Esto va a abrir el menú para agregar un
            marcador, En carpeta selecciona &quot;Barra De
            Marcadores&quot;/&quot;Barra De favoritos&quot; y haz clic en el
            Botón de &quot;Mas&quot;
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
            finalmente haz clic en guardar
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/3.png",
        info: (
          <>
            <Text fontSize={"sm"}>
              En la barra de marcadores debería aparecer. Si no ves la barra,
              presiona <Kbd>CTRL/⌘ + SHIFT + B</Kbd>. Ahora ingresa a la página
              oficial de{" "}
              <Link
                href="https://mitec.itesm.mx/"
                color="blue.400"
                target={"_blank"}
                _hover={{ color: "blue.500" }}
              >
                Mitec
              </Link>{" "}
              con tu usuario y contraseña y continua al siguiente paso
            </Text>
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/4.png",
        info: (
          <>
            Ya que estes en el tablero de Mitec haz clic en el marcador que
            creaste, para que se muestre tu cookie y se copie automaticamente,
            haz clic en aceptar y automaticamente regresaras a Mitec+ para poder
            pegar tu cookie
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Chrome/3.png",
        info: (
          <>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            que ingresar a la página oficial de Mitec con tu usuario y
            contraseña y ya que estes en el tablero hacer clic en el marcador
            para copiar tu cookie y regresar a Mitec+ para ingresarla.
          </>
        ),
      },
    ],
    //-------------------------------------Chrome Mobile--------------------------------------------------- */
    mobile: [
      {
        image: "Tutorials/Mobile/Chrome/1.png",
        info: (
          <>Haz clic en los 3 puntos que se encuntran arriba a la derecha</>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/2.png",
        info: <>Haz clic en la estrella, esto va a crear un marcador</>,
      },
      {
        image: "Tutorials/Mobile/Chrome/3.png",
        info: (
          <>
            Ahora hasta abajo va a salir un mesaje diciendo que se salvo el
            marcador, haz clic en el boton de editar
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
            finalmente haz clic en la flecha para salvar
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/5.png",
        info: (
          <>
            Ingresa a la página oficial de{" "}
            <Link
              href="https://mitec.itesm.mx/"
              color="blue.400"
              target={"_blank"}
              _hover={{ color: "blue.500" }}
            >
              Mitec
            </Link>{" "}
            con tu usuario y contraseña y ya que estes en el tablero principal
            haz clic en la barra de busqueda y busca el nombre que le pusiste al
            marcador, finalmente haz clic en el marcador
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/6.png",
        info: (
          <>
            Ya que hiciste clic en el marcador tu cookie se va a copiar
            automaticamente y te va a aparecer un mensaje de que se copio(en
            caso de que no se haya copiado la puedes copiar
            manualmente),finalmente haz clic en &quot;ok&quot; y automaticamente
            te va a redirigir a Mitec+ para que la pegues.
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Chrome/5.png",
        info: (
          <>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            qué ingresar a la pagina oficial de{" "}
            <Link
              href="https://mitec.itesm.mx/"
              color="blue.400"
              target={"_blank"}
              _hover={{ color: "blue.500" }}
            >
              Mitec
            </Link>{" "}
            con tu usuario y contraseña y ya que estes en el tablero principal
            hacer clic en la barra de busqueda y busca el nombre que le pusiste
            al marcador y hacer clic en el.
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
            Presiona <Kbd>CTRL/⌘ + D</Kbd> o haz clic en la estrella al final de
            la barra de busqueda. Esto va a abrir el menú para agregar un
            marcador, En carpeta selecciona &quot;Barra De Marcadores&quot; y
            haz clic en el Botón de &quot;Salvar&quot;
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/2.png",
        info: (
          <>
            Ahora en la barra de marcadores te deberia de aparecer el marcador,
            si no te aparece la barra presiona <Kbd>CTRL/⌘ + SHIFT + B</Kbd> Haz
            clic derecho en el marcador y seleciona editar marcador.
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
            finalmente haz clic en guardar
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/4.png",
        info: (
          <>
            En la barra de marcadores debería aparecer. Si no ves la barra,
            presiona <Kbd>CTRL/⌘ + SHIFT + B</Kbd>. Ahora ingresa a la página
            oficial de{" "}
            <Link
              href="https://mitec.itesm.mx/"
              color="blue.400"
              target={"_blank"}
              _hover={{ color: "blue.500" }}
            >
              Mitec
            </Link>{" "}
            con tu usuario y contraseña y continua al siguiente paso
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/5.png",
        info: (
          <>
            Ya que estes en el tablero de Mitec haz clic en el marcador que
            creaste, para que se muestre tu cookie y se copie automaticamente,
            haz clic en aceptar y automaticamente regresaras a Mitec+ para poder
            pegar tu cookie
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Firefox/4.png",
        info: (
          <>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            que ingresar a la página oficial de Mitec con tu usuario y
            contraseña y ya que estes en el tablero hacer clic en el marcador
            para copiar tu cookie y regresar a Mitec+ para ingresarla.
          </>
        ),
      },
    ],
    mobile: [{ image: "", info: "" }],
  },
  safari: {
    //-------------------------------------Safari desktop--------------------------------------------------- */

    desktop: [
      {
        image: "Tutorials/Desktop/Safari/1.png",
        info: (
          <>
            Haz clic en el boton de compartir al final de la barra de busqueda.
            Esto va a abrir un menú, haz clic en &quot;Agregar Marcador&quot;
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Safari/2.png",
        info: (
          <>
            En carpeta selecciona &quot;Favoritos&quot; y haz clic en el Botón
            de &quot;Agregar&quot;
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Safari/3.png",
        info: (
          <>
            Ahora vete hasta arriba y en la parte de marcadores selecciona
            &quot;mostrar marcadores&quot;
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Safari/4.png",
        info: (
          <>
            Ya que estes en la barra de marcadores haz clic derecho en el
            marcador que acabas de crear y después haz clic en editar dirección,
            elimina el contenido actual y copia y pega el siguiente codigo
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
            finalmente haz clic en listo
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Safari/5.png",
        info: (
          <>
            Ahora ingresa a la página oficial de{" "}
            <Link
              href="https://mitec.itesm.mx/"
              color="blue.400"
              target={"_blank"}
              _hover={{ color: "blue.500" }}
            >
              Mitec
            </Link>{" "}
            con tu usuario y contraseña y ya que estes en el tablero principal
            haz clic en el marcador que creaste para que se muestre tu cookie y
            se copie automáticamente, haz clic en ok y automaticamente
            regresaras a Mitec+ para poder pegar tu cookie
          </>
        ),
      },
      {
        image: "Tutorials/Desktop/Safari/6.png",
        info: (
          <>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            que ingresar a la página oficial de Mitec con tu usuario y
            contraseña y ya que estes en el tablero hacer clic en el marcador
            para copiar tu cookie y regresar a Mitec+ para ingresarla.
          </>
        ),
      },
    ],

    //-------------------------------------Safari Mobile--------------------------------------------------- */

    mobile: [
      {
        image: "Tutorials/Mobile/Safari/1.png",
        info: (
          <>
            Haz clic en el símbolo de compartir debajo de la barra de búsqueda
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Safari/2.png",
        info: (
          <>Haz clic en Agregar a Marcadores, esto va a crear un marcador</>
        ),
      },
      {
        image: "Tutorials/Mobile/Safari/3.png",
        info: (
          <>
            En ubicación selecciona &quot;Favoritos&quot; y haz clic en guardar
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Safari/4.png",
        info: (
          <>Haz clic en el símbolo del libro debajo de la barra de búsqueda</>
        ),
      },
      {
        image: "Tutorials/Mobile/Safari/5.png",
        info: (
          <>
            Selecciona favoritos y despues haz clic en editar y finalmente haz
            clic en la flecha del marcador que creaste
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Safari/6.png",
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
            finalmente haz clic en aceptar
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Safari/7.png",
        info: (
          <>
            Ahora ingresa a la página oficial de{" "}
            <Link
              href="https://mitec.itesm.mx/"
              color="blue.400"
              target={"_blank"}
              _hover={{ color: "blue.500" }}
            >
              Mitec
            </Link>{" "}
            con tu usuario y contraseña y ya que estes en el tablero principal
            haz clic en el marcador que creaste para que se muestre tu cookie y
            se copie automáticamente, haz clic en ok y automaticamente
            regresaras a Mitec+ para poder pegar tu cookie
          </>
        ),
      },
      {
        image: "Tutorials/Mobile/Safari/8.png",
        info: (
          <>
            Listo! ahora cada vez que necesites reingresar tu cookie solo tienes
            que ingresar a la página oficial de Mitec con tu usuario y
            contraseña y ya que estes en el tablero hacer clic en el marcador
            para copiar tu cookie y regresar a Mitec+ para ingresarla.
          </>
        ),
      },
    ],
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
          <Link color="blue.500" href="https://mitec.itesm.mx">
            Mitec <ExternalLinkIcon mx="2px" />
          </Link>{" "}
          e ingresa con tu cuenta. Cuando estes en el tablero presiona{" "}
          <Kbd>F12</Kbd> y en la consola ingresa el siguiente comando:{" "}
          <Code>document.cookie.match(/Epsilon=([^;]+)/)[1]</Code> Esto va a
          imprimir tu cookie, copiala y pegala arriba
        </Text>
      ),
    },
  ],
};

export default TutorialData;
