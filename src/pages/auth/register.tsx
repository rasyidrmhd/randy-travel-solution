import React from "react";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import { NextPageWithLayout } from "../_app";

const Register: NextPageWithLayout = () => {
  return (
    <Center
      w="100vw"
      h="100vh"
      p="40px"
      bgImage="/logo.svg"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="860px"
    >
      <Flex
        w="50%"
        p="40px"
        bg="white"
        gap="15px"
        rounded="40px"
        flexDir="column"
        boxShadow="0px 4px 4px 0px #00000040"
      >
        <Text fontWeight="600" fontSize="24px">
          Daftar
        </Text>
        <FormControl>
          <FormLabel>User ID</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Nama</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type="password" />
            <InputRightElement>
              <ViewIcon cursor="pointer" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Konfirmasi Password</FormLabel>
          <InputGroup>
            <Input type="password" />
            <InputRightElement>
              <ViewIcon cursor="pointer" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button>Daftar</Button>
      </Flex>
    </Center>
  );
};

Register.getLayout = (page: React.ReactNode) => {
  return <>{page}</>;
};

export default Register;
