"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ClassInterface from "../interfaces/ClassInterface";
import axios from "axios";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { BiMap, BiTimeFive } from "react-icons/bi";

const ep =
  '{"iP":"03420355","tU":"Alumno TecMty","jW":"eyJraWQiOiJoczI1Ni1rZXkiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBMDEwMjg0OTMiLCJzdWIiOiJBMDEwMjg0OTNAdGVjLm14IiwiYXVkIjoiQWx1bW5vIFRlY010eSIsImV4cCI6MTY4NzQ4OTQ4NCwiaWF0IjoxNjg3NDg1ODg0LCJ0ZWMtaWQtcGVyc29uYSI6IjAzNDIwMzU1In0.h0W_a9SQkl6uWzuX2Lkb2Tan7OjnYPcvI6F1oEwP55E","oA":"AAIgMWVmZGZmNGYyNWQ1YTZiYzhmODVjZjRhZjE0NmEyYjci7O8w8VPxnWgq58I0iUliZhgO2LRwJ4UZC0OcPzSor0JNmkw0dTgeIKKefw2rSJC4PRB8uhapQudtd0g_bN5HCmEgv6iq0geY89yghBjgcf9v7bZk70s1VHJAAIq-_y0","ex":1687489200}';
const c1 = JSON.parse(ep).oA;
const c2 = JSON.parse(ep).jW;

export default function TodaysClasses() {
  const [date, setDate] = useState<Date>(new Date());
  const [classes, setClasses] = useState<ClassInterface[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/A01028493/horario-de-cursos?claveEjercicioAcademico=202311",
        {
          headers: {
            accept: "application/vnd.api+json",
            authorization: `Bearer ${c1}`,

            "x-auth-jwt": c2,
          },
        }
      )
      .then((response) => {
        let formattedClasses: ClassInterface[] = [];

        for (let i = 0; i < response.data.data.length; i++) {
          const d = response.data.data[i];

          for (let h = 0; h < d.attributes.horario.length; h++) {
            formattedClasses.push({
              id: response.data.included[i].id,
              name: response.data.included[i].attributes.descripcionMateria,
              classStartDate: d.attributes.horario[h].fechaInicioClase,
              classEndDate: d.attributes.horario[h].fechaFinClase,
              classStartTime: d.attributes.horario[h].horaInicioClase,
              classEndTime: d.attributes.horario[h].horaFinClase,
              days: d.attributes.horario[h].dias,
              group: d.attributes.horario[h].grupo,
              classBuilding: d.attributes.horario[h].descripcionEdificio,
              classroom: d.attributes.horario[h].claveSalon,
              teachers: [
                response.data.data[i].relationships["profesor-titular"].data.id,
              ],
            });
          }
        }
        setClasses(formattedClasses);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box
      h={`calc(100vh - ${200}px)`}
      overflowY="auto"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Flex alignItems="center" p="10px">
        <Heading mr="10px" size={{ base: "lg" }}>
          Tus clases de hoy
        </Heading>
        <SingleDatepicker
          propsConfigs={{
            inputProps: {
              w: "130px",
              borderColor: "blackAlpha.200",
              borderWidth: "2px",
            },
          }}
          name="date-input"
          date={date}
          onDateChange={setDate}
        />
      </Flex>

      {classes.length > 0 ? (
        (() => {
          const filteredClasses = classes
            .filter((c, i, arr) => {
              if (
                arr.some(
                  (o, j) =>
                    j < i &&
                    o.classStartDate === c.classStartDate &&
                    o.id === c.id
                ) === true
              ) {
                return false;
              }

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
              <Flex justifyContent="center">
                <Text>No tienes clases!</Text>
              </Flex>
            );
          }

          return filteredClasses.map((c, i) => (
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
        <Skeleton>
          <Flex
            borderWidth="1px"
            borderColor="gray.200"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="md"
            w="100%"
            h="70px"
            bg={"white"}
            padding={5}
            direction="row"
            mb="10px"
          ></Flex>
        </Skeleton>
      )}
    </Box>
  );
}
