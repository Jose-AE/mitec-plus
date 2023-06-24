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
import TodaysClasses from "../components/TodaysClasses";
import { useEffect } from "react";
import axios from "axios";

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
      <Box as="div" className="col-lg-4 d-inline-block align-top pr-5">
        <Flex
          className="card"
          id="printJS-card"
          pos="relative"
          display="inline-block"
          verticalAlign="middle"
          height="270px"
          textAlign="left"
          padding="30px"
          marginBottom="50px"
          borderRadius="20px"
          boxSizing="border-box"
        >
          <div>
            <Image src="" alt="Logo Here" pos="absolute" width="116px" />
          </div>
          <Flex as="div" className="d-inline-block">
            <Image width="150px" height="150px" margin="40px 0 25px 0" />
          </Flex>
          <Flex
            as="div"
            pos="relative"
            display="inline-block"
            verticalAlign="top"
            padding="30px"
          >
            <Heading as="h5">John Doe</Heading>
            <Heading as="h5">03/31/2019 at 11:19 AM</Heading>
          </Flex>
          <Flex className="text-center">
            <Heading as="h5">Construction</Heading>
          </Flex>
        </Flex>
        <Flex className="pt-2">
          <Button
            type="button"
            value="Capture Face"
            colorScheme="primary"
            size="md"
          >
            Capture Face
          </Button>
          <Button
            id="btn-populate-data"
            type="button"
            value="idScan"
            colorScheme="success"
            size="md"
          >
            idScan
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default App;
