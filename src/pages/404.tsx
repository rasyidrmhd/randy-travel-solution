import React from "react";
import { NextPageWithLayout } from "./_app";
import { Center } from "@chakra-ui/react";

const NotFound: NextPageWithLayout = () => {
  return (
    <Center w="100vw" h="100vh">
      Page not found.
    </Center>
  );
};

NotFound.getLayout = (page: React.ReactNode) => {
  return <>{page}</>;
};

export default NotFound;
