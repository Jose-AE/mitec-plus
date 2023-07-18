import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  useColorModeValue,
  Avatar,
  Image,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import TutorialData from "./TutorialData";

function getBrowserInstructions() {
  var userAgent = navigator.userAgent;
  var browserName;

  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "firefox";
  } else if (userAgent.indexOf("Chrome") > -1) {
    browserName = "chrome";
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "safari";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browserName = "opera";
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "edge";
  } else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
  } else {
    browserName = "Unknown Browser";
  }

  return TutorialData["chrome"].desktop; //remove line, just testing

  if (userAgent.indexOf("Win") > -1) {
    return TutorialData[browserName].desktop;
  } else if (userAgent.indexOf("Mac") > -1) {
    return TutorialData[browserName].desktop;
  } else if (userAgent.indexOf("Linux") > -1) {
    return TutorialData[browserName].desktop;
  } else if (userAgent.indexOf("Android") > -1) {
    return TutorialData[browserName].mobile;
  } else if (userAgent.indexOf("iOS") > -1) {
    return TutorialData[browserName].mobile;
  } else {
    return TutorialData.default;
  }
}

// Settings for the slider
const settings = {
  dots: true,
  fade: true,
  infinite: false,
  speed: 0,

  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function TutorialCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "95%", md: "95%" });
  const side = useBreakpointValue({ base: "0%", md: "10px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = getBrowserInstructions().map((data: any) => {
    return {
      info: data.info,
      image: data.image,
    };
  });

  return (
    <Box
      borderRadius="lg"
      position={"relative"}
      height={"450px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card: any, i: number) => (
          <Card dropShadow={"none"} key={i} maxW="sm">
            <Image src={card.image} alt="Info" borderRadius="lg" />
            <Stack mt="2" spacing="3">
              {card.info}
            </Stack>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
