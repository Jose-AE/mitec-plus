import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Image,
  Card,
  Flex,
} from "@chakra-ui/react";
import { BiClipboard, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import TutorialData from "./TutorialData";
import { debug } from "console";

function getBrowserInstructions() {
  //return TutorialData["chrome"].mobile; //remove line, just testing

  var browserList = [
    { name: "Firefox", value: "Firefox" },
    { name: "Opera", value: "OPR" },
    { name: "Edge", value: "Edg" },
    { name: "Chrome", value: "Chrome" },
    { name: "Safari", value: "Safari" },
  ];
  var os = [
    { name: "Android", value: "Android" },
    { name: "iPhone", value: "iPhone" },
    { name: "iPad", value: "Mac" },
    { name: "Macintosh", value: "Mac" },
    { name: "Linux", value: "Linux" },
    { name: "Windows", value: "Win" },
  ];

  let userDetails = navigator.userAgent;
  let userOS: string = "NA";
  let userBrowser: string = "NA";
  for (let i in browserList) {
    if (userDetails.includes(browserList[i].value)) {
      userBrowser = browserList[i].name || "NA";
      break;
    }
  }
  for (let i in os) {
    if (userDetails.includes(os[i].value)) {
      userOS = os[i].name;
      break;
    }
  }

  console.log(userOS, userBrowser);

  if (userOS === "Windows" && userBrowser === "Chrome")
    return TutorialData.chrome.desktop; //
  else if (userOS === "Windows" && userBrowser === "Firefox")
    return TutorialData.firefox.desktop; //
  else if (userOS === "Macintosh" && userBrowser === "Safari")
    return TutorialData.firefox.desktop;
  else if (userOS === "Macintosh" && userBrowser === "Firefox")
    return TutorialData.firefox.desktop; //
  else if (userOS === "Macintosh" && userBrowser === "Chrome")
    return TutorialData.chrome.desktop; //
  else if (
    (userOS === "iPad" || userOS === "iPhone") &&
    userBrowser === "Safari"
  )
    return TutorialData.chrome.mobile;
  else if (
    (userOS === "iPad" || userOS === "iPhone") &&
    userBrowser === "Safari"
  )
    return TutorialData.chrome.mobile; //
  else if (userOS === "Android" && userBrowser === "Chrome")
    return TutorialData.chrome.mobile; //
  /////
  else return TutorialData.default;
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
  const [slider, setSlider] = useState<Slider | null>(null);
  const [instructions, setInstructions] = useState([]);

  const top = useBreakpointValue({ base: "95%", md: "95%" });
  const side = useBreakpointValue({ base: "0%", md: "10px" });

  useEffect(() => {
    setInstructions(getBrowserInstructions());
  }, []);

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
        {instructions.map((card: any, i: number) => (
          <Card dropShadow={"none"} key={i} maxW="sm">
            <Image src={card.image} alt="Info" borderRadius="lg" mb="2" />

            {card.info}
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
