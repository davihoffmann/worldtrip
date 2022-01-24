import { Flex, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {AiOutlineArrowLeft} from 'react-icons/ai';

import Logo from './Logo';

export default function Header() {
  const { back, asPath } = useRouter();

  let showArrowBack = false;

  if(asPath !== '/') {
    showArrowBack = true;
  }
  
  return (
    <Flex
      as="header"
      w="100%"
      h={100}
      p="7"
      alignItems="center"
    >
      {
        showArrowBack && (
          <IconButton 
            onClick={() => back()} 
            icon={<AiOutlineArrowLeft />} 
            aria-label='Back to Home' 
            bg="gray.50"
          />          
        )
      }
      
      <Flex 
        alignItems="center"
        justifyContent="center"
        flex={1}
      >
        <Logo />
      </Flex>
    </Flex>
  );
}
