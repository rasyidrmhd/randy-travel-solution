import React from "react";
import {
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { ViewIcon } from "@chakra-ui/icons";

const Register: React.FC = () => {
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

export default Register;
