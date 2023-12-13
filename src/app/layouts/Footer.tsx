import React from "react";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Flex h="95px" bgColor="#333333" color="white" alignItems="center">
      <Grid templateColumns="repeat(12,1fr)" w="full" px="60px">
        <GridItem
          h="full"
          as={Flex}
          colSpan={2}
          w="fit-content"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="26px" fontWeight="900" lineHeight="26px">
            Ravel
          </Text>
          <Text lineHeight="14px">Travel Solution</Text>
        </GridItem>
        <GridItem
          as={Flex}
          colSpan={8}
          alignItems="center"
          justifyContent="center"
        >
          <Text>
            Copyright ©{new Date().getFullYear()} All rights reserved
          </Text>
        </GridItem>
        <GridItem colSpan={2} />
      </Grid>
    </Flex>
  );
};

export default Footer;
