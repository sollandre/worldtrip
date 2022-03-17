import { Box, Heading, Text } from "@chakra-ui/react";

interface CarouselCardProps{
  background: string;
  title: string;
  description: string;
} 

export function CarouselCard({background, title, description}: CarouselCardProps){
  return (
    <Box
      h='100%'
      w='100%'
      p='2rem'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      flexWrap='wrap'
      backgroundImage={background}
      backgroundSize='100% 100%'
      textAlign='center'
      color='light.500'
    >
      <Heading fontSize={['2xl', '7xl']} mb={['3', '8']}>
        {title}
      </Heading>
      <Text fontSize={['lg','3xl']} fontWeight='bold'>
        {description}
      </Text>
    </Box>
  );
}