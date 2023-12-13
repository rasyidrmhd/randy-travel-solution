import React from "react";
import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";

const Experience: React.FC = () => {
  return (
    <Center w="full" p="40px">
      <Flex>
        <Image src="/assets/home/experience.jpg" w="448px" h="333px" />
        <Flex flexDir="column">
          <Text fontSize="24px" fontWeight="700">
            Experience Nomor Satu!
          </Text>
          <Flex flexDir="column" gap="45px">
            <Flex flexDir="column">
              <Text fontSize="16px" fontWeight="700">
                Dipercaya Seluruh Dunia
              </Text>
              <Text fontSize="15px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vulputate erat sit amet malesuada lacinia. Maecenas
                hendrerit, nunc ac finibus interdum, metus nibh pharetra elit,
                in efficitur est sem ut nunc. Cras bibendum turpis tempor,
                eleifend leo vel, sodales ligula. Vestibulum pulvinar fringilla
                justo, ac dignissim sapien vulputate eu. Quisque bibendum
                sagittis orci, id dapibus quam tincidunt eget. Aenean suscipit
                ex ac ex facilisis, at ullamcorper nibh ultricies. Sed porttitor
                mi at leo suscipit tincidunt. Fusce molestie pharetra velit ac
                luctus. Donec feugiat dictum tellus, vitae vestibulum erat
                tempus quis. Maecenas suscipit porta ligula, ut mattis lacus
                ultrices sit amet. In scelerisque nibh at odio lobortis, ut
                venenatis eros cursus. Sed molestie purus ut eros pretium, et
                auctor tellus accumsan. Etiam posuere suscipit mi ac aliquet.
              </Text>
            </Flex>
            <Button w="fit-content">Testimoni</Button>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Experience;
