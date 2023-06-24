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

function App() {
  useEffect(() => {
    for (let period of ["202311"]) {
      axios
        .get(
          (process.env.NEXT_PUBLIC_API_GRADES as string).replace(
            "PERIOD",
            period
          ),
          {
            headers: {
              accept: "application/vnd.api+json",
              authorization: `Bearer ${c1}`,
              "x-auth-jwt": c2,
            },
          }
        )
        .then((response) => {
          console.log(response);
          for (let c of response.data.data) {
            if (c.relationships) {
              console.log(c);
            }
          }
        })

        .catch((error) => {
          console.log(error);
          //res = { error: error.message };
        });
    }
  }, []);

  return <>d</>;
}

export default App;
