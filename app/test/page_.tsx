"use client";

import {
  Box,
  Image,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

interface TokenInterface {
  JWT: string;
  oAuth: string;
}

function App() {
  useEffect(() => {
    axios
      .get("URL", {
        headers: {
          Accept: "application/json;odata=verbose",
          "Content-Type": "application/json",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
      })
      .then((response) => {
        // Handle the response here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  }, []);

  return (
    <>
      <Text>Test</Text>
    </>
  );
}

export default App;
