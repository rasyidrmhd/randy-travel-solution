import { Center, Flex } from "@chakra-ui/react";

import Hero from "../app/components/Hero";

export default function Home() {
  return (
    <Flex flexDir="column" w="full">
      <Hero />
    </Flex>
  );
}
