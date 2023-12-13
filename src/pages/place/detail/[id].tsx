import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import { NextPageWithLayout } from "../../_app";

const DetailPlace: NextPageWithLayout = () => {
  return (
    <Flex
      w="full"
      flexGrow={1}
      py="40px"
      gap="40px"
      flexDir="column"
      alignItems="center"
    >
      <Flex w="full" flexDir="column" alignItems="center" fontWeight="600">
        <Text fontSize="64px" lineHeight="68px">
          Surabaya
        </Text>
        <Text fontSize="48px" lineHeight="48px">
          Mencari Perlawanan Dari Sura dan Buaya
        </Text>
      </Flex>
      <Image src="/assets/place/surabaya-detail.jpg" w="full" />
      <Flex flexDir="column" w="50%" textAlign="center" gap="20px">
        <Text fontSize="16px" fontWeight="700">
          Surabaya, Sura dan Buaya!
        </Text>
        <Text fontSize="15px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc ac
          finibus interdum, metus nibh pharetra elit, in efficitur est sem ut
          nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales ligula.
          Vestibulum pulvinar fringilla justo, ac dignissim sapien vulputate eu.
          Quisque bibendum sagittis orci, id dapibus quam tincidunt eget. Aenean
          suscipit ex ac ex facilisis, at ullamcorper nibh ultricies. Sed
          porttitor mi at leo suscipit tincidunt. Fusce molestie pharetra velit
          ac luctus. Donec feugiat dictum tellus, vitae vestibulum erat tempus
          quis. Maecenas suscipit porta ligula, ut mattis lacus ultrices sit
          amet. In scelerisque nibh at odio lobortis, ut venenatis eros cursus.
          Sed molestie purus ut eros pretium, et auctor tellus accumsan. Etiam
          posuere suscipit mi ac aliquet.
        </Text>
        <Text fontSize="16px" fontWeight="700">
          Mulai dari : Rp. 1.500.000
        </Text>
      </Flex>
    </Flex>
  );
};

export default DetailPlace;
