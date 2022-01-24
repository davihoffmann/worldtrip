import {
  Flex,
  Container,
  Text,
  Image,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={335}
      justify="space-around"
      backgroundImage="/background.png"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Text fontSize="4xl" mb="4" color="gray.50" fontWeight="600">
          5 Continentes, <br />
          infinitas possibilidades.
        </Text>
        <Text fontSize="lg" fontWeight="400" color="gray.50">
          Chegou a hora de tirar do papel a viagem que você
          <br /> sempre sonhou.
        </Text>
      </Box>
      <Image src="/airplane.png" w={417} h={270} mt="24" />
    </Flex>
  );
}
