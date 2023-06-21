"use client";

import {
  Badge,
  Box,
  Text,
  Button,
  Flex,
  Stack,
  Image,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex>
        <Box
          boxShadow={"xl"}
          borderRadius="lg"
          p="10px"
          bg="gray.200"
          w="1200px"
          h={`calc(100vh - ${600}px)`}
          overflowY="auto"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          mt="10px"
        >
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w="100%"
            height={{ sm: "476px", md: "100px" }}
            direction={{ base: "column", md: "row" }}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            padding={4}
          >
            <Stack
              flex={1}
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Lindsey James
              </Heading>
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                @lindsey_jam3s
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Actress, musician, songwriter and artist. PM for work inquires
                or me in your posts
              </Text>
              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #art
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #photography
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #music
                </Badge>
              </Stack>

              <Stack
                width={"100%"}
                mt={"2rem"}
                direction={"row"}
                padding={2}
                justifyContent={"space-between"}
                alignItems={"center"}
              ></Stack>
            </Stack>
          </Stack>
        </Box>
        <Flex w="100px" h="100px" bg="red.200">
          d
        </Flex>
      </Flex>
    </>
  );
}
