import React from "react";
import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Flex h="80px" bgColor="white" alignItems="center">
      <Grid templateColumns="repeat(12,1fr)" w="full" px="60px">
        <GridItem
          h="full"
          as={Flex}
          colSpan={2}
          flexDir="column"
          justifyContent="center"
        >
          <Flex gap="13px">
            <Image src="/logo.svg" w="45px" h="40px" />
            <Flex flexDir="column">
              <Text fontSize="12px" fontWeight="900">
                Ravel
              </Text>
              <Text fontSize="10px">Travel Solution by Randy</Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          as={Flex}
          colSpan={8}
          gap="24px"
          alignItems="center"
          justifyContent="center"
        >
          <Link href="#" passHref>
            <Text>Home</Text>
          </Link>
          <Link href="#" passHref>
            <Text>Tempat Lain</Text>
          </Link>
          <Link href="#" passHref>
            <Text>Testimoni</Text>
          </Link>
        </GridItem>
        <GridItem colSpan={2}>
          <Menu>
            <MenuButton w="full">
              <Flex
                w="full"
                gap="10px"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Text as="span">Halo, Reza</Text>
                <Avatar name="Reza" />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Header;
