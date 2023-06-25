"use client";

import { useState } from "react";
import SERVICES from "./data";
import {
  Box,
  Flex,
  Grid,
  Text,
  Tooltip,
  Image,
  Select,
  Input,
} from "@chakra-ui/react";

export default function Services() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Flex gap={5} direction="row" mb="10px">
        <Flex w="50%" direction="column">
          <Text as="b" p="5px">
            Buscar
          </Text>
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Flex>
        <Flex w="50%" direction={"column"}>
          <Text as="b" p="5px">
            Filtrar por categoria
          </Text>
          <Select
            placeholder="Todos"
            onChange={(e) => {
              setCategoryFilter(e.target.value);
            }}
          >
            <option value={"Servicios de Apoyo"}>Servicios de Apoyo</option>
            <option value={"Vida Estudiantil"}>Vida Estudiantil</option>
            <option value={"Servicios en Campus"}>Servicios en Campus</option>

            <option value={"Servicios de Apoyo Académico"}>
              Servicios de Apoyo Académico
            </option>
          </Select>
        </Flex>
      </Flex>
      <Grid
        /* bg={{
          base: "red.100",
          sm: "green.100",
          md: "blue.200",
          lg: "yellow.200",
          "2xl": "white",
        }}*/
        autoRows="auto"
        templateColumns={{
          base: "repeat(4, minmax(0, 1fr))",
          sm: "repeat(6, minmax(0, 1fr))",
          md: "repeat(6, minmax(0, 1fr))",
          lg: "repeat(8, minmax(0, 1fr))",
          "2xl": "repeat(12, minmax(0, 1fr))",
        }}
        gap={2}
      >
        {SERVICES.filter((s) => {
          if (categoryFilter) {
            return s.Categoria === categoryFilter;
          } else {
            return true;
          }
        })
          .filter((s) => {
            return (
              s.Nombre +
              s.PalabrasClave +
              s.Subcategoria +
              s.Descripcion +
              s.Agrupacion
            )
              .toLowerCase()

              .includes(search.toLowerCase());
          })
          .map((s, i) => (
            <Tooltip key={i} hasArrow label={s.Nombre} fontSize="md">
              <Box
                borderWidth="3px"
                onClick={() => {
                  window.open(s.URL, "_blank");
                }}
                maxW="100px"
                maxH="100px"
                borderRadius="5px"
                _hover={{ bg: "gray.200", cursor: "pointer" }}
              >
                <Image
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  p="10px"
                  src={s.Icono}
                />
              </Box>
            </Tooltip>
          ))}
      </Grid>
    </>
  );
}
