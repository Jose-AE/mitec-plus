"use client";

import React, { ReactNode, useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  Button,
  Switch,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

import { IconType } from "react-icons";
import MitecLogo from "./MitecLogo";

import {
  BiHomeAlt2,
  BiIdCard,
  BiCalendar,
  BiCategory,
  BiInfoCircle,
} from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import demo_user from "@/app/demo_data/user";

interface LinkItemProps {
  navTo: string;
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Inicio", navTo: "/dashboard", icon: BiHomeAlt2 },
  { name: "Mi Agenda", navTo: "/dashboard/schedule", icon: BiCalendar },
  {
    name: "Mi Inscripción",
    navTo: "https://iris.tec.mx/app/enrollment-processes",
    icon: TbSchool,
  },
  { name: "Servicios", navTo: "/dashboard/services", icon: BiCategory },
  { name: "Sobre Mitec+", navTo: "/dashboard/about", icon: BiInfoCircle },
];

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex alignItems="center">
          <MitecLogo scale={0.15} />
          <Flex fontSize="sm">
            mi
            <Text as="b" color="gray.500">
              tec
            </Text>
            |<Text color="rgb(255, 153, 1)">Plus+</Text>
          </Flex>
        </Flex>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavItem key={i} name={link.name} navTo={link.navTo} icon={link.icon} />
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  navTo: string;
  name: string;
}
const NavItem = ({ icon, navTo, name }: NavItemProps) => {
  return (
    <Link
      href={navTo}
      target={navTo.slice(0, 1) === "h" ? "_blank" : ""}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue("gray.100", "gray.700"),
        }}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {name}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (getCookie("token")) {
      if (JSON.parse(getCookie("token") as string).demo === "true") {
        setName(demo_user.name);
        setId(demo_user.id);
      } else {
        setName(localStorage.getItem("user_name") || "");
        setId(localStorage.getItem("user_id") || "");
      }
    }
  }, []);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Flex display={{ base: "flex", md: "none" }} alignItems="center">
        <MitecLogo scale={0.15} />
        <Flex fontSize="sm">
          mi
          <Text as="b" color="gray.500">
            tec
          </Text>
          |<Text color="rgb(255, 153, 1)">Plus+</Text>
        </Flex>
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar bg={"red.200"} src="" size={"sm"} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{name}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {id}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>

            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Button
                gap={2}
                ml="10px"
                variant={"ghost"}
                onClick={toggleColorMode}
              >
                Tema {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
              </Button>

              <MenuDivider />
              <MenuItem
                onClick={() => {
                  deleteCookie("token");

                  window.location.href = "/login";
                }}
              >
                Cerrar Sesión
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
