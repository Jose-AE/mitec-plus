"use client";

import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import TodaysClasses from "../components/TodaysClasses";
import { useEffect } from "react";
import axios from "axios";

const ep = process.env.NEXT_PUBLIC_TEST_SECRET as string;

const c1 = JSON.parse(ep).oA;
const c2 = JSON.parse(ep).jW;

interface GradesInterface {
  periods: string[];
  grades: { id: string; name: string; period: string; grade: string }[];
}

const url1 =
  "https://apigateway.tec.mx/tec-de-monterrey/api/tec/personas?alumno=A01028493&include=correos-electronicos,generos,paises,estados,poblaciones";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://apigateway.tec.mx/tec-de-monterrey/api/tec/id-digital/A01028493",
        {
          headers: {
            accept: "application/vnd.api+json",
            authorization: `Bearer ${c1}`,
            "x-auth-jwt": c2,
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

  return <>d</>;
}

export default App;
