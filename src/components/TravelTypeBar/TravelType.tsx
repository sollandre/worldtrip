import { Heading, VStack, Image } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

interface TravelTypeProps {
  image: string;
  title: string;
}

export function TravelType({image, title}){
  return (
    <VStack spacing={[6]}>
        <Image src={image} />
        <Heading size='md' color='dark.600'>
          {title}
        </Heading>
      </VStack>
  ); 
}