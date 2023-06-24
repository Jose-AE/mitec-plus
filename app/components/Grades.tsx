"use client";

import {
  Badge,
  Box,
  Flex,
  Heading,
  Select,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface GradesInterface {
  periods: string[];
  grades: {
    id: string;
    name: string;
    group: string;
    period: string;
    grade: string;
  }[];
}

export default function Grades() {
  const [periods, setPeriods] = useState<string[]>([]);
  const [period, setPeriod] = useState<string>("");
  const [grades, setGrades] = useState<GradesInterface[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/grades")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [period]);

  return (
    <>
      <Flex h="10%" alignItems="center" p="10px">
        <Heading mr="10px" size={{ base: "sm", md: "lg" }}>
          Calificaciones
        </Heading>
        <Select
          placeholder="Todos los semestres"
          onChange={(e) => {
            setPeriod(e.target.value);
          }}
        >
          {periods.map((name, i) => (
            <option key={i} value={name}>
              {name.slice(0, 4) +
                (name.slice(4, 6) == "13" ? " Ago-Dic" : " Feb-Jun")}
            </option>
          ))}
        </Select>
      </Flex>
      <Box
        h="90%"
        overflowY="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {grades.length > 0 ? (
          grades.map((g, i) => (
            <Flex
              borderWidth="1px"
              borderColor="gray.200"
              key={i}
              justifyContent="space-between"
              alignItems="center"
              borderRadius="md"
              w="100%"
              h="70px"
              bg={"white"}
              padding={5}
              direction="row"
              mb="10px"
            >
              <Text fontSize={{ base: "12px", md: "16px" }} as="b" flex="2">
                {g.name.replace(/\([^()]*\)/g, "")}
              </Text>

              {g.grade !== null ? (
                <Badge colorScheme={g.grade >= 70 ? "green" : "red"}>
                  <Text ml="5px" fontSize={{ base: "12px", md: "16px" }}>
                    {g.grade}/100
                  </Text>
                </Badge>
              ) : (
                <Badge>
                  <Text ml="5px" fontSize={{ base: "12px", md: "16px" }}>
                    Pending
                  </Text>
                </Badge>
              )}
            </Flex>
          ))
        ) : (
          <>
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} h="70px" mb="10px" />
            ))}
          </>
        )}
      </Box>
    </>
  );
}
