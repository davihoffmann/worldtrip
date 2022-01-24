import {
  Flex,
  Text,
  Image,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      w="100%"
      h={335}
      justify="space-around"
      backgroundImage="/background.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      mx="auto"
      px={["5", "10"]}
    >
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Text fontSize={["lg", "4xl"]} mb="4" color="gray.50" fontWeight="600">
          5 Continentes, <br />
          infinitas possibilidades.
        </Text>
        <Text fontSize="lg" fontWeight="400" color="gray.50">
          Chegou a hora de tirar do papel a viagem que você
          <br /> sempre sonhou.
        </Text>
      </Box>
      {isWideVersion && (
        <Image src="/airplane.png" w={417} h={270} mt="24" alt="Worltrip Logo" />
      )}
    </Flex>
  );
}
