"use client";

import {
  Badge,
  Box,
  Flex,
  Heading,
  Select,
  Skeleton,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import demo_grades from "@/app/demo_data/grades";

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

  function CalculateGPA(): number {
    if (grades.length === 0) return 0;

    let totalSum = 0;
    let gradesLength = 0;
    const gradesToCalculate = grades.filter((g) => {
      if (period === "") {
        return true;
      } else {
        return g.period === period;
      }
    });

    for (let gradeData of gradesToCalculate) {
      //if grade is number
      if (/\d/.test(gradeData.grade)) {
        totalSum += parseFloat(gradeData.grade);
        gradesLength += 1;
      }
    }
    return Math.round((totalSum / gradesLength) * 10) / 10;
  }

  useEffect(() => {
    if (getCookie("token")) {
      if (JSON.parse(getCookie("token") as string).demo === "true") {
        setGrades(demo_grades.grades);
        setPeriods(demo_grades.periods);
      } else {
        axios
          .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/grades")
          .then((response) => {
            setPeriods(response.data.periods);
            setGrades(response.data.grades);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, []);

  const colors = {
    border: useColorModeValue("gray.200", "none"),
    card: useColorModeValue("white", "none"),
  };

  return (
    <>
      <Flex h="10%" alignItems="center" p="10px">
        <Heading mr="10px" size={{ base: "sm", md: "lg" }}>
          Calificaciones
        </Heading>

        <Tooltip hasArrow label="Promedio">
          <Badge mr="10px" colorScheme={"green"}>
            <Text fontSize={{ base: "12px", md: "16px" }}>
              {CalculateGPA() === 0 ? "NA" : CalculateGPA()}
            </Text>
          </Badge>
        </Tooltip>

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
                borderColor={colors.border}
                bg={colors.card}
                key={i}
                justifyContent="space-between"
                alignItems="center"
                borderRadius="md"
                w="100%"
                h="70px"
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
