import { Flex } from "@chakra-ui/react";

import Hero from "../app/components/Hero";
import NewDestination from "../app/components/NewDestination";
import ExploreMore from "../app/components/ExploreMore";

export default function Home() {
  return (
    <Flex flexDir="column" w="full">
      <Hero />
      <NewDestination />
      <ExploreMore />
    </Flex>
  );
}
