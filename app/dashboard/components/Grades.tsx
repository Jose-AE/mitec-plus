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

interface GradeInterface {
  id: string;
  name: string;
  group: string;
  period: string;
  grade: string;
}

const PeriodEnum: { [key: string]: string } = {
  "13": "Ago-Dic",
  "12": "Verano",
  "11": "Feb-Jun",
  "10": "Invierno",
};

export default function Grades() {
  const [periods, setPeriods] = useState<string[]>([]);
  const [period, setPeriod] = useState<string>("");
  const [grades, setGrades] = useState<GradeInterface[]>([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/grades")
      .then((response) => {
        setPeriods(response.data.periods);
        setGrades(response.data.grades);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Flex h="10%" alignItems="center" p="10px">
        <Heading mr="10px" size={{ base: "sm", md: "lg" }}>
          Calificaciones
        </Heading>
        <Select
          borderWidth="2px"
          placeholder="Todos los periodos"
          onChange={(e) => {
            setPeriod(e.target.value);
          }}
        >
          {periods.map((period, i) => (
            <option key={i} value={period}>
              {period.slice(0, 4) + " " + PeriodEnum[period.slice(4, 6)]}
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
          grades
            .filter((g) => {
              if (period === "") {
                return true;
              } else {
                return g.period === period;
              }
            })
            .map((g, i) => (
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
                  {g.name}
                </Text>

                {g.grade !== "NA" ? (
                  <Badge
                    colorScheme={
                      Number(g.grade) >= 70 || g.grade === "SA"
                        ? "green"
                        : "red"
                    }
                  >
                    <Text fontSize={{ base: "12px", md: "16px" }}>
                      {Number(g.grade) > 0 ? `${g.grade}/100` : g.grade}
                    </Text>
                  </Badge>
                ) : (
                  <Badge>
                    <Text fontSize={{ base: "12px", md: "16px" }}>Pending</Text>
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
