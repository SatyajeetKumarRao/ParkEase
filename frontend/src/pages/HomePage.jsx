import React from "react";

import { FaCar } from "react-icons/fa";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import car from "../assets/car.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box
      fontFamily={'"Poppins", "sans-serif"'}
      maxW={"1024px"}
      mx={"auto"}
      my={26}
      p={10}
    >
      <Text
        fontWeight={"normal"}
        fontStyle={"italic"}
        fontSize={{ base: "xl", lg: "2xl" }}
        textAlign={{ base: "center", md: "start" }}
      >
        Ultimate Car Parking Solution
      </Text>

      <Flex
        fontWeight={"normal"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        align={"center"}
        margin={0}
        padding={0}
        direction={{ base: "column", md: "row" }}
      >
        <Text>Park with Ease, </Text>
        <Flex
          boxSize={{ md: "60px", lg: "80px" }}
          bgColor={"#04a14433"}
          boxShadow={"0px 0px 71px -8px rgba(77,240,88,0.64)"}
          boxSizing="border-box"
          justify={"center"}
          align={"center"}
          borderRadius={"50%"}
          m={"10px"}
          p={"10px"}
        >
          <Flex
            boxSize={{ md: "40px", lg: "60px" }}
            bgColor={"#04a144"}
            boxSizing="border-box"
            justify={"center"}
            align={"center"}
            borderRadius={"50%"}
            p={"10px"}
          >
            <FaCar color="white" />
          </Flex>
        </Flex>
        <Text> Every Time.</Text>
      </Flex>

      <Flex
        mt={10}
        align={"center"}
        gap={10}
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
      >
        <Box maxW={96} w={"100%"} textAlign={"center"}>
          <Image
            src={car}
            alt="Dan Abramov"
            cursor={"pointer"}
            onClick={() => {
              navigate("/map");
            }}
          />
        </Box>
        <Box>
          <Text fontWeight={500} my={2}>
            About
          </Text>
          <Text fontSize={"sm"} maxW={96} w={"100%"}>
            Our car parking service offers unparalleled convenience and
            security. With state-of-the-art facilities and seamless operations,
            we ensure stress-free parking experiences for all. Your
            vehicle&apos;s safety and ease of access are our top priorities.
          </Text>
        </Box>
      </Flex>

      <Flex align={"center"} justify={"center"} mt={10}>
        <Button
          ml={"-20px"}
          fontWeight={"normal"}
          color={"white"}
          textAlign={"center"}
          colorScheme="green"
          onClick={() => {
            navigate("/map");
          }}
        >
          <Flex gap={2} align={"center"} justify={"center"}>
            Get Started <ExternalLinkIcon fontSize={"15px"} />
          </Flex>
        </Button>
      </Flex>
    </Box>
  );
};

export { HomePage };
