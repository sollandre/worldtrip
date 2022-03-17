import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from './carousel.module.scss'

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, HStack, Image } from "@chakra-ui/react";
import { CarouselCard } from "./CarouselCard";

const continentData = [
  {
    background: '/continents/europe.jpg',
    title: 'Europa',
    description: 'O continente mais antigo'
  },
  {
    background: '/continents/asia.jpg',
    title: 'Asia',
    description: 'Conheça um novo mundo'
  },
  {
    background: '/continents/oceania.jpg',
    title: 'Oceania',
    description: 'A beleza de suas ilhas é incomparável'
  },
  {
    background: '/continents/na.jpg',
    title: 'América',
    description: 'Os países e atracões mais visitados'
  },
  {
    background: '/continents/africa.jpg',
    title: 'Africa',
    description: 'Se encante com as maravilhas que existem'
  },
]

export function Carousel() {
  
  return (
    <Box
      h={['2xs','xl']}
      mx={['none','24']}
      mb={['6','16']}
      display='grid'
      justifyItems='center'
      alignItems='center'
      gridTemplateRows='1fr auto'
      gridTemplateColumns='auto 1fr auto'
      gridTemplateAreas='"prev center next" "footer footer footer"' 
    >
      <Image
        id='swipe-prev'
        gridArea='prev'
        src="/chevron-left.svg"
        alt="Click to go to the previous selection"
        cursor='pointer'
        h={['1.5rem','3rem']}
        mx={['1.2rem' ,'4rem']}
        zIndex='2'
       />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          el: '#pagination-container',
          bulletActiveClass: styles.bulletActive,
          bulletClass: styles.bulletClass,
        }}
        navigation={{
          nextEl: '#swipe-next',
          prevEl: '#swipe-prev'
        }}
        modules={[Pagination, Navigation]}
        className={styles.mySwipper}
      >
        {
          continentData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <CarouselCard 
                   {...data}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Image
        id='swipe-next'
        gridArea='next'
        src="/chevron-right.svg"
        alt="Click to go to the next selection"
        cursor='pointer'
        
        h={['1.5rem','3rem']}
        mx={['1.2rem' ,'4rem']}
        zIndex='2'
       />
      <HStack 
        id='pagination-container'
        gridArea='footer'
        justify='center'
        spacing={['.5rem','1rem']}
        zIndex='2'
        mb='1.5rem'
      />
    </Box>
  );
}
