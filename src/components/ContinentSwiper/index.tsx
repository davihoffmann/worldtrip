import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperSlideItem from './SwiperSlideItem';

import 'swiper/css';

export default function ContinentSwiper() {
  return (
    <Flex
      w="100%"
      maxW={1240}
      mx="auto"
      mt={['5', '13']}
      mb={['5', '10']}
      h={['250px', '450px']}
      px={['0', '20']}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 1000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <Box className="swiper-button-next"></Box>
        <Box className="swiper-button-prev"></Box>

        <SwiperSlide>
          <SwiperSlideItem
            title="Europa"
            description="O continente mais antigo."
            imagePath="/europa.png"
            href="/continent/europe"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideItem
            title="América do Norte"
            description="Um universo cosmopolita."
            imagePath="/europa.png"
            href="/continent/northamerica"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideItem
            title="América do Sul"
            description="Beleza natural exuberante."
            imagePath="/europa.png"
            href="/continent/southamerica"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideItem
            title="Ásia"
            description="Os mistérios do oriente."
            imagePath="/europa.png"
            href="/continent/asia"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideItem
            title="África"
            description="Os safaris mais incríveis."
            imagePath="/europa.png"
            href="/continent/africa"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideItem
            title="Ocêania"
            description="O encontro da natureza com o futurismo."
            imagePath="/europa.png"
            href="/continent/oceania"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
