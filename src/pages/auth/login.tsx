import React from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <Flex h="100vh">
      <Box backgroundImage="/assets/auth/login-illustration.svg" w="50%" />
      <Center w="50%" h="full" p="40px">
        <Flex
          p="40px"
          gap="15px"
          rounded="40px"
          flexDir="column"
          boxShadow="0px 4px 4px 0px #00000040"
          w="full"
        >
          <Image src="/logo-text.svg" w="310px" alt="randy-travel-logo" />
          <Text fontWeight="600" fontSize="24px">
            Masuk
          </Text>
          <FormControl>
            <FormLabel>User ID</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="text" />
          </FormControl>
          <Checkbox>Ingat saya!</Checkbox>
          <Button>Login</Button>
          <Text fontSize="14px" textAlign="center">
            atau
          </Text>
          <Text fontSize="14px" textAlign="center">
            Belum punya akun?{" "}
            <Link href="/auth/register" passHref>
              <Text as="span">Daftar</Text>
            </Link>
          </Text>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Login;
