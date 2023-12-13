import { Flex } from "@chakra-ui/react";

import Hero from "../app/components/Hero";
import NewDestination from "../app/components/NewDestination";

export default function Home() {
  return (
    <Flex flexDir="column" w="full">
      <Hero />
      <NewDestination />
    </Flex>
  );
}
