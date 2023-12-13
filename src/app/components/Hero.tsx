import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Flex
      w="full"
      h="470px"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgImage="/assets/home/hero.jpg"
      px="40px"
      py="20px"
    >
      <Flex flexDir="column" color="white" alignSelf="end">
        <Text fontSize="40px" lineHeight="40px" fontWeight="800">
          Ravel
        </Text>
        <Text fontSize="24px" lineHeight="24px">
          Travel Solution
        </Text>
      </Flex>
    </Flex>
  );
};

export default Hero;
