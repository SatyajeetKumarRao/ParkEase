import "./App.css";
import { FaCar } from "react-icons/fa";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

import car from "./assets/car.png";

function App() {
  return (
    <Box
      fontFamily={'"Poppins", "sans-serif"'}
      maxW={"1024px"}
      mx={"auto"}
      my={32}
      p={10}
    >
      <Text fontWeight={"normal"} fontStyle={"italic"} fontSize="2xl">
        Ultimate Car Parking Solution
      </Text>
      <Flex
        fontWeight={"normal"}
        fontSize="5xl"
        align={"center"}
        margin={0}
        padding={0}
      >
        Park with Ease,{" "}
        <Flex
          w={"80px"}
          h={"80px"}
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
            w={"60px"}
            h={"60px"}
            bgColor={"#04a144"}
            boxSizing="border-box"
            justify={"center"}
            align={"center"}
            borderRadius={"50%"}
            p={"10px"}
          >
            <FaCar color="white" />
          </Flex>
        </Flex>{" "}
        Every Time.
      </Flex>

      <Flex mt={10} align={"center"} gap={10} justifyContent={"space-between"}>
        <Box w={96}>
          <Image src={car} alt="Dan Abramov" />
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
    </Box>
  );
}

export default App;
