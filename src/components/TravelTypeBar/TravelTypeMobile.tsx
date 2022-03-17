import { Flex, FlexProps, Image } from "@chakra-ui/react";


interface TravelTypeProps extends FlexProps {
  image: string;
  title: string;
}

export function TravelTypeMobile({image, title, ...rest}){
  return (
    <Flex align='center' {...rest}>
      <Image src={image} boxSize='.8rem' mr={2} />
      {title}
    </Flex>
  ); 
}