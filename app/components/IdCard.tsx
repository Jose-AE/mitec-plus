import axios from "axios";
import React, { useEffect, useState } from "react";

import { Image } from "@chakra-ui/react";

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

  return <Image src={user?.pfp}></Image>;
}
