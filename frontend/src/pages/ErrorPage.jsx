import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import error404 from "../assets/404.gif";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Flex
      justify={"center"}
      textAlign={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <Text
        fontSize={"100px"}
        fontFamily={'"Poppins", "sans-serif"'}
        fontWeight={800}
        color="blackAlpha.500"
      >
        404
      </Text>
      <Image src={error404} mt={"-150px"} zIndex={-1} />
      <Text
        mt={"-150px"}
        fontSize={"3xl"}
        fontFamily={'"Poppins", "sans-serif"'}
        fontWeight={500}
      >
        Look like you're lost
      </Text>
      <Text fontFamily={'"Poppins", "sans-serif"'} fontSize={"xs"}>
        the page you are looking for not available!
      </Text>
      <Button
        colorScheme="green"
        mt={8}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
    </Flex>
  );
};

export { ErrorPage };
