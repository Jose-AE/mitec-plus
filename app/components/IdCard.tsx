import axios from "axios";
import React, { useEffect, useState } from "react";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";

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
          Tus clases de hoy
        </Heading>
      </Flex>
      <Box borderRadius="lg" bgSize="cover" bgImage="/test.png" h="80%">
        <Image src={user?.pfp}></Image>
      </Box>
    </>
  );
}
