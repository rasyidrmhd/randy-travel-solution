import React from "react";
import {
  Flex,
  Text,
  Image,
  Input,
  Center,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";

import { NextPageWithLayout } from "../_app";
import { Search2Icon } from "@chakra-ui/icons";

const ResultCard: React.FC<{
  src: string;
  title: string;
  desc: string;
  price: string;
}> = ({ src, title, desc, price }) => {
  return (
    <Flex gap="40px" my="20px" cursor="pointer">
      <Image src={src} w="242px" h="198px" alt={title} />
      <Flex flexDir="column" gap="20px">
        <Text fontSize="15px" fontWeight="700">
          {title}
        </Text>
        <Text fontSize="14px" fontWeight="300">
          {desc}
        </Text>
        <Text fontSize="15px" fontWeight="700">
          Mulai dari: {price}
        </Text>
      </Flex>
    </Flex>
  );
};

const Place: NextPageWithLayout = () => {
  return (
    <Flex w="full" flexGrow={1} p="40px" gap="40px" flexDir="column">
      <Center flexDir="column" flexGrow={1} gap="35px" alignItems="center">
        <Flex w="full" flexDir="column" alignItems="center" fontWeight="600">
          <Text fontSize="64px" lineHeight="64px">
            Halo, Reza
          </Text>
          <Text fontSize="48px" lineHeight="48px">
            Kemana Kau Ingin Pergi?
          </Text>
        </Flex>
        <InputGroup w="60%">
          <Input type="password" />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>
      </Center>

      <Flex flexDir="column" gap="40px">
        <Text fontSize="20px" fontWeight="700">
          Hasil Pencarian mu:
        </Text>
        <Flex flexDir="column">
          {[
            {
              src: "/assets/home/explore/bali.jpg",
              title: "Bali, Part of Indonesia",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc ac finibus interdum, metus nibh pharetra elit, in efficitur est sem ut nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales ligula. Vestibulum pulvinar fringilla justo, ac dignissim sapien vulputate eu. Quisque bibendum sagittis orci, id dapibus quam tincidunt eget. Aenean suscipit ex ac ex facilisis, at ullamcorper nibh ultricies. Sed porttitor mi at leo suscipit tincidunt. Fusce molestie pharetra velit ac luctus. Donec feugiat dictum tellus, vitae vestibulum erat tempus quis. Maecenas suscipit porta ligula, ut mattis lacus ultrices sit amet. In scelerisque nibh at odio lobortis, ut venenatis eros cursus. Sed molestie purus ut eros pretium, et auctor tellus accumsan. Etiam posuere suscipit mi ac aliquet.",
              price: "1500000",
            },
            {
              src: "/assets/home/explore/jakarta.jpg",
              title: "Jakarta, Bukan IKN",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc ac finibus interdum, metus nibh pharetra elit, in efficitur est sem ut nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales ligula. Vestibulum pulvinar fringilla justo, ac dignissim sapien vulputate eu. Quisque bibendum sagittis orci, id dapibus quam tincidunt eget. Aenean suscipit ex ac ex facilisis, at ullamcorper nibh ultricies. Sed porttitor mi at leo suscipit tincidunt. Fusce molestie pharetra velit ac luctus. Donec feugiat dictum tellus, vitae vestibulum erat tempus quis. Maecenas suscipit porta ligula, ut mattis lacus ultrices sit amet. In scelerisque nibh at odio lobortis, ut venenatis eros cursus. Sed molestie purus ut eros pretium, et auctor tellus accumsan. Etiam posuere suscipit mi ac aliquet.",
              price: "1500000",
            },
          ].map(({ title, src, desc, price }, idx) => (
            <>
              <ResultCard
                key={idx}
                src={src}
                title={title}
                desc={desc}
                price={price}
              />
              {idx === 0 && <Divider />}
            </>
          ))}
        </Flex>
        <Text fontSize="14px" fontWeight="700" alignSelf="center">
          Akhir dari pencarianmu...
        </Text>
      </Flex>
    </Flex>
  );
};

export default Place;
