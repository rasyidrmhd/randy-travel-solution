import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

const ExploreCard: React.FC<{ src: string; title: string; desc: string }> = ({
  src,
  title,
  desc,
}) => {
  return (
    <Flex flexDir="column" w="160px" alignItems="center">
      <Image src={src} h="160px" w="160px" alt={title} />
      <Text fontSize="14px" fontWeight="700">
        {title}
      </Text>
      <Text fontSize="14px" textAlign="center">
        {desc}
      </Text>
    </Flex>
  );
};

const ExploreMore: React.FC = () => {
  return (
    <Flex
      py="40px"
      gap="45px"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="24px" fontWeight="700">
        Explore Tempat Lainnya
      </Text>
      <Flex
        w="full"
        px="40px"
        py="65px"
        gap="54px"
        flexWrap="wrap"
        bgColor="#FAFAFA"
        justifyContent="center"
      >
        {[
          {
            src: "/assets/home/explore/bali.jpg",
            title: "Bali",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.....",
          },
          {
            src: "/assets/home/explore/jakarta.jpg",
            title: "Jakarta",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.....",
          },
        ].map(({ title, src, desc }, idx) => (
          <ExploreCard key={idx} src={src} title={title} desc={desc} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ExploreMore;
