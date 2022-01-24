import { Box, Divider, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import ContinentSwiper from '../components/ContinentSwiper';

export default function Home() {
  return (
    <Flex direction="column" alignItems="center">
      <Header />
      <Banner />

      {/* Categories */}
      <Flex maxWidth={1440} my="32" mx="140px">
        <SimpleGrid columns={[1, 2, 2, 2, 5]} spacing={40}>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/cocktail.png" />
            <Text color="gray.600" fontSize="sm" fontWeight="600" mt="3">
              vida noturna
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/surf.png" />
            <Text color="gray.600" fontSize="sm" fontWeight="600" mt="3">
              praia
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/building.png" />
            <Text color="gray.600" fontSize="sm" fontWeight="600" mt="3">
              moderno
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/museum.png" />
            <Text color="gray.600" fontSize="sm" fontWeight="600" mt="3">
              clássico
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/earth.png" />
            <Text color="gray.600" fontSize="sm" fontWeight="600" mt="3">
              e mais...
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>

      <Flex w="100%" alignItems="center" justifyContent="center">
        <Divider width="90px" height="2px" bg="gray.800" />
      </Flex>

      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        mt="20"
        mb="10"
      >
        <Text
          color="gray.600"
          fontSize="2xl"
          fontWeight="600"
          textAlign="center"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>

      <ContinentSwiper />
    </Flex>
  );
}
