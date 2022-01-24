import { Box, Flex, Text, useColorModeValue, Image, Avatar } from "@chakra-ui/react";
import { generateKeyPair } from "node:crypto";
// import ReactCountryFlag from "react-country-flag";

interface CardCitiesProps {
  imagePath: string;
  name: string;
  country: string;
}

export function CardCity({
  imagePath,
  name,
  country
}: CardCitiesProps) {
  return (
    <Flex 
    as="section" 
    direction="column"
    w="100%" 
    maxWidth={1440}
    h="auto" 
    mx="auto"
    mt={["5","0"]}
    justifyContent="flex-start"
    alignItems={["center","flex-start"]}
  >
    
    <Flex
      h="279px"
      w="256px"
      direction="column"
      borderWidth={1}
      borderColor="yellow.300"
      borderRadius="4px"
    >
      <Box>
        <Image src={imagePath} alt={name} />
      </Box>
      <Flex alignItems="center" justifyContent="space-between" my="5" px="6">
        <Box>
          <Text fontSize="lg" color="gray.600" fontWeight="600">
            {name}
          </Text>
          <Text color="gray.400" fontSize="sm">
            {country}
          </Text>
        </Box>
        <Box w="30px" h="30px" textAlign="center" borderRadius="full">
          <Avatar name={name} size="sm" />
        </Box>
      </Flex>
    </Flex>
  </Flex>
  );
}