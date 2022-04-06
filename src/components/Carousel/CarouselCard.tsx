import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextLink from 'next/link'

interface CarouselCardProps{
  background: string;
  title: string;
  description: string;
  href: string;
} 

export function CarouselCard({background, title, description, href}: CarouselCardProps){
  return (
    <LinkBox
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
      <NextLink href={`/${href}`} passHref>
        <LinkOverlay>
          <Heading fontSize={['2xl', '7xl']} mb={['3', '8']}>
            {title}
          </Heading>
          <Text fontSize={['lg','3xl']} fontWeight='bold'>
            {description}
          </Text>
        </LinkOverlay>  
      </NextLink>
    </LinkBox>
  );
}