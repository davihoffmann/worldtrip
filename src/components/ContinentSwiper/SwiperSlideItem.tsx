import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SwiperSlideItemProps {
  title: string;
  description: string;
  imagePath: string;
  href: string;
}

export default function SwiperSlideItem({
  title,
  description,
  imagePath,
  href,
}: SwiperSlideItemProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      bgImage={imagePath}
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
    >
      <Link href={href}>
        <a>
          <Text
            fontSize={['3xl', '4xl', '5xl']}
            color="gray.100"
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={['0.8rem', '1xl', '2xl']}
            mt={['2', '4']}
          >
            {description}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
