import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const NewDestination: React.FC = () => {
  return (
    <Flex p="40px" gap="16px">
      <Image
        src="/assets/home/new-destination.jpg"
        w="440px"
        h="318px"
        alt="new-destination"
      />
      <Flex flexDir="column" gap="13px">
        <Text fontSize="24px" fontWeight="700">
          Tujuan Baru!
        </Text>
        <Flex flexDir="column" gap="16px">
          <Text fontSize="15px">Maldives, Surganya Dunia</Text>
          <Text fontSize="14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc
            ac finibus interdum, metus nibh pharetra elit, in efficitur est sem
            ut nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales
            ligula. Vestibulum pulvinar fringilla justo, ac dignissim sapien
            vulputate eu. Quisque bibendum sagittis orci, id dapibus quam
            tincidunt eget. Aenean suscipit ex ac ex facilisis, at ullamcorper
            nibh ultricies. Sed porttitor mi at leo suscipit tincidunt. Fusce
            molestie pharetra velit ac luctus. Donec feugiat dictum tellus,
            vitae vestibulum erat tempus quis. Maecenas suscipit porta ligula,
            ut mattis lacus ultrices sit amet. In scelerisque nibh at odio
            lobortis, ut venenatis eros cursus. Sed molestie purus ut eros
            pretium, et auctor tellus accumsan. Etiam posuere suscipit mi ac
            aliquet. Pellentesque vel elementum mauris. Integer mollis urna
            vitae euismod hendrerit. Vivamus convallis, quam id feugiat
            malesuada, lorem elit faucibus velit, a elementum ipsum ex et nulla.
            Fusce lacinia nec sapien eu mollis. Duis ut augue mollis, feugiat
            sapien non, porta velit. Phasellus quis vulputate ligula. Nam id
            enim a ligula tempus venenatis. Phasellus vulputate suscipit quam.
            Nulla vitae diam egestas, rutrum arcu vitae, euismod mi.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewDestination;
