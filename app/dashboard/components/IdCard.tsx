import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Barcode from "react-barcode";

interface UserInterface {
  id: string;
  name: string;
  surname1: string;
  surname2: string;
  birthdate: string;
  pfp: string;
}

export default function IdCard() {
  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Flex h="20%" alignItems="center" p="10px">
        <Heading mr="10px" size={{ base: "sm", md: "lg" }}>
          ID Digital
        </Heading>
      </Flex>
      <Grid
        maxH={{ base: "200px", md: "none" }}
        templateRows={{ base: "repeat(5, 1fr)", md: "repeat(8, 1fr)" }}
        templateColumns={{
          base: "repeat(6, 1fr)",
          md: " repeat(4, 1fr) repeat(3, 2fr) repeat(3, 1fr)",
        }}
        h="80%"
        borderRadius="lg"
        bgSize="cover"
        bgImage="/IdBG.png"
      >
        <GridItem
          maxH={{ base: "500px", md: "none" }}
          ml="20px"
          gridArea={{ base: "1 / 1 / 3 / 4", md: "1 / 1 / 4 / 5" }}
        >
          <Image
            objectFit="contain"
            h="100%"
            w="100%"
            mt="10px"
            borderRadius="lg"
            src="/LogoTecLarge.png"
          ></Image>
        </GridItem>

        <GridItem
          maxH={{ base: "500px", md: "none" }}
          p="10px"
          gridArea={{ base: "4 / 1 / 6 / 7", md: "6 / 1 / 9 / 7" }}
        >
          <Flex pl="10px" direction="column" justifyItems="flex-end">
            <Text
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              size={"lg"}
              color="white"
              as="b"
            >
              {user?.name} {user?.surname1} {user?.surname2}
            </Text>
            <Text
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              size={"lg"}
              color="white"
              as="b"
            >
              {user?.id}
            </Text>
          </Flex>
        </GridItem>

        <GridItem
          maxH={{ base: "500px", md: "none" }}
          gridArea={{ base: "1 / 5 / 4 / 7", md: "1 / 7 / 6 / 11" }}
        >
          <Flex
            m={{ base: "0px", md: "20px" }}
            p={{ base: "10px", md: "10px" }}
            justifyContent="flex-end"
            alignItems="center"
            h="100%"
          >
            <Image
              borderRadius="10px"
              objectFit="contain"
              h="100%"
              src={user?.pfp}
            ></Image>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

/*


      <Flex h="80%" borderRadius="lg" bgSize="cover" bgImage="/IdBG.png">
        <Image
          h="100px"
          p="20px"
          borderRadius="lg"
          src="/LogoTecLarge.png"
        ></Image>
        <Image
          objectFit="contain"
          h="100px"
          borderRadius="lg"
          src={user?.pfp}
        ></Image>
        <Flex direction="column">
          <Text color="white" as="b">
            {user?.name} {user?.surname1} {user?.surname2}
          </Text>
          <Text color="white" as="b">
            {user?.id}
          </Text>
        </Flex>
      </Flex>

*/