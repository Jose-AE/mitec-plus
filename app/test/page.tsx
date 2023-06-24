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
    const token: TokenInterface | undefined = JSON.parse(
      getCookie("token") as string
    );

    axios
      .get(
        "https://apigateway.tec.mx/tec-de-monterrey/api/tec/id-digital/A01028493",
        {
          headers: {
            accept: "application/vnd.api+json",
            authorization: `Bearer ${token?.oAuth}`,
            "x-auth-jwt": token?.JWT,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
        //res = { error: error.message };
      });
  }, []);

  return (
    <>
      <Text>Test</Text>
    </>
  );
}

export default App;
