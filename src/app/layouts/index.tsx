import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex inset={0} w="full" minH="100vh" flexDir="column">
      <Header />
      <Flex flexGrow="1" justifyContent="center">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
