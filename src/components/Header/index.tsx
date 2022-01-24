import { Flex } from '@chakra-ui/react';
import Logo from './Logo';

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h={100}
      maxWidth={1440}
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Logo />
    </Flex>
  );
}
