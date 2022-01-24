import { Box, Flex, Heading, Icon, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { FiAlertCircle } from 'react-icons/fi'
import Header from "../../components/Header";

interface ContinentDetailProps {
  nome: string;
}

export default function ContinentDetail({ nome }: ContinentDetailProps) {
  return (
    <Flex direction="column" alignItems="center">
      <Header />

      <Flex
        w="100%"
        h={500}
        backgroundImage="/europa_detail.png"
        bgRepeat="no-repeat"
        bgSize="cover"
      />

      <Flex mt="14" mx="10">
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
    </Flex>
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