"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  Skeleton,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { BiMap, BiTimeFive } from "react-icons/bi";
import { color } from "framer-motion";
import { getCookie } from "cookies-next";
import demo_classes from "@/app/demo_data/classes";

interface ClassInterface {
  id: string;
  name: string;
  classStartDate: string;
  classEndDate: string;
  classStartTime: string;
  classEndTime: string;
  days: string[];
  group: string;
  classBuilding: string;
  classroom: string;
  teachers: { id: string; name: string }[];
}

export default function TodaysClasses() {
  const [date, setDate] = useState<Date>(new Date());
  const [classes, setClasses] = useState<ClassInterface[]>([]);

  useEffect(() => {
    if (getCookie("token")) {
      if (JSON.parse(getCookie("token") as string).demo === "true") {
        setClasses(demo_classes);
        setTimeout(() => {
          setDate(new Date("2023-02-14"));
        }, 100);
      } else {
        axios
          .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/classes")
          .then((res) => {
            setClasses(res.data);
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
      <Flex h="20%" alignItems="center" p="10px">
        <Heading mr="10px" size={{ base: "sm", md: "lg" }}>
          Tus clases de hoy
        </Heading>
        <SingleDatepicker
          propsConfigs={{
            inputProps: {
              w: "135px",
              borderColor: "blackAlpha.200",
              borderWidth: "2px",
            },
          }}
          name="date-input"
          date={date}
          onDateChange={setDate}
        />
      </Flex>
      <Box
        h="80%"
        overflowY="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {classes.length > 0 ? (
          (() => {
            const filteredClasses = classes
              .filter((c, i, arr) => {
                const classStartDate = new Date(c.classStartDate);
                const classEndDate = new Date(c.classEndDate);

                // Check if the current date is between the start and end dates of the class
                return (
                  date >= classStartDate &&
                  date <= classEndDate &&
                  c.days.includes(
                    ["SU", "M", "T", "W", "R", "F", "SA"][date.getDay()]
                  )
                );
              })
              .sort((a, b) => {
                const startTimeA = a.classStartTime;
                const startTimeB = b.classStartTime;

                // Compare the start times
                if (startTimeA < startTimeB) {
                  return -1;
                }
                if (startTimeA > startTimeB) {
                  return 1;
                }

                return 0;
              });

            if (filteredClasses.length === 0) {
              return (
                <Center h="100%">
                  <Text>No tienes clases!</Text>
                </Center>
              );
            }

            return filteredClasses.map((c, i) => (
              <Flex
                borderWidth="1px"
                borderColor={colors.border}
                key={i}
                justifyContent="space-between"
                alignItems="center"
                borderRadius="md"
                w="100%"
                h="70px"
                bg={colors.card}
                padding={5}
                direction="row"
                mb="10px"
              >
                <Text fontSize={{ base: "12px", md: "16px" }} as="b" flex="2">
                  {c.name}
                </Text>
                <BiMap />
                <Text ml="5px" fontSize={{ base: "12px", md: "16px" }} flex="1">
                  {c.classBuilding + " " + c.classroom}
                </Text>
                <BiTimeFive />
                <Text ml="5px" fontSize={{ base: "12px", md: "16px" }}>
                  {c.classStartTime + "-" + c.classEndTime}
                </Text>
              </Flex>
            ));
          })()
        ) : (
          <>
            <Skeleton h="70px" mb="10px" />
            <Skeleton h="70px" mb="10px" />
            <Skeleton h="70px" mb="10px" />
            <Skeleton h="70px" mb="10px" />
          </>
        )}
      </Box>
    </>
  );
}
