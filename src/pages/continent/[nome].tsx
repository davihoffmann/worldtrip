import { Box, Flex, Heading, Icon, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { FiAlertCircle } from 'react-icons/fi'
import { CardCity } from "../../components/CardCity";
import Header from "../../components/Header";

interface ContinentDetailProps {
  nome: string;
}

export default function ContinentDetail({ nome }: ContinentDetailProps) {
  return (
    <>
      <Header />

      <Flex
        w="100%"
        h={500}
        backgroundImage="/europa_detail.png"
        bgRepeat="no-repeat"
        bgSize="cover"
      />

      <Flex mt="14" mx={["10", "10", "20", "36"]}>
        <SimpleGrid columns={[1, 1, 2]} spacing={20}>
          <Text textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo. 
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex justifyContent="space-around" alignItems="center">
            <Box textAlign="center">
              <Heading color="yellow.400">
                50
              </Heading>
              <Text>
                países
              </Text>
            </Box>

            <Box textAlign="center">
              <Heading color="yellow.400">
                60
              </Heading>
              <Text>
                linguas
              </Text>
            </Box>

            <Box textAlign="center">
              <Heading color="yellow.400">
                27
              </Heading>
              
              <Text display="flex" alignItems="center">
                cidades +100
                <Tooltip 
                  hasArrow 
                  label='Informações' 
                  bg='gray.800' 
                  color='gray.300'
                >
                  <span>
                    <FiAlertCircle color="gray.50" />
                  </span>
                </Tooltip>
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Flex>


      <Flex mt={20} mx={["10", "10", "20", "36"]} direction="column">
        <Heading textAlign="start" color="gray.600">Cidades +100</Heading>

        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing="4" mt={10}>
          <CardCity 
            name="Londres" 
            country="Reino Unido" 
            imagePath="/cities/londres.png" 
          />

          <CardCity 
            name="Paris" 
            country="França" 
            imagePath="/cities/londres.png" 
          />

          <CardCity 
            name="Roma" 
            country="Italia" 
            imagePath="/cities/londres.png" 
          />

          <CardCity 
            name="Praga"
            country="República Tcheca" 
            imagePath="/cities/londres.png" 
          />

          <CardCity 
            name="Amsterdã" 
            country="Holanda" 
            imagePath="/cities/londres.png" 
          />
        </SimpleGrid>
       
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [
    ],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const { nome } = params;
  //BUSCA DADOS
  return {
    props : {
      nome
    },
    revalidate: 60 * 30 // 30 Minutos
  }
}