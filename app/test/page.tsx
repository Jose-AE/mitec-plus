"use client";

import {
  Box,
  Image,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import TodaysClasses from "../dashboard/components/TodaysClasses";
import { useEffect } from "react";
import axios from "axios";
import { Carousel } from "flowbite-react";

const ep = process.env.NEXT_PUBLIC_TEST_SECRET as string;

const c1 = JSON.parse(ep).oA;
const c2 = JSON.parse(ep).jW;

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

  return (
    <>
      <Carousel>
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
      </Carousel>
    </>
  );
}

export default App;
