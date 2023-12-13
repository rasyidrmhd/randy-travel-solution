import React from "react";
import { Avatar, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import { NextPageWithLayout } from "./_app";
import { StarIcon } from "@chakra-ui/icons";

const TestimonialCard: React.FC<{
  name: string;
  testi: string;
  rate: number;
}> = ({ name, testi, rate }) => {
  return (
    <Flex rounded="25px" p="25px" gap="20px" border="1px solid #767676">
      <Avatar name={name} h="75px" w="75px" />
      <Flex flexDir="column" gap="15px">
        <Flex flexDir="column">
          <Text fontSize="24px" fontWeight="600">
            {name}
          </Text>
          <Text fontSize="11px">{testi}</Text>
        </Flex>
        <Flex gap="4px">
          {Array.from({ length: rate }).map((_, idx) => (
            <StarIcon key={idx} color="yellow.400" />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

const Testimonial: NextPageWithLayout = () => {
  return (
    <Flex w="full" flexGrow={1} p="40px" gap="40px" flexDir="column">
      <Flex w="full" flexDir="column" alignItems="center" fontWeight="600">
        <Text fontSize="64px" lineHeight="64px">
          Semua Testimoni Kami
        </Text>
      </Flex>
      <Grid templateColumns="repeat(2,1fr)" gap="20px">
        {[
          {
            name: "Randy Arfianto",
            testi:
              "Aplikasi yang membantu saya dalam berpergian, terima kasih Ravel!",
            rate: 5,
          },
          {
            name: "Bagus Harijonta",
            testi: "Aplikasi nya butuh peningkatan, tapi overall bagus!",
            rate: 4,
          },
          {
            name: "Agung Dwi",
            testi: "Jelek Aplikasinya, tidak rekomended",
            rate: 1,
          },
        ].map(({ name, testi, rate }, idx) => (
          <GridItem key={idx}>
            <TestimonialCard name={name} testi={testi} rate={rate} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Testimonial;
