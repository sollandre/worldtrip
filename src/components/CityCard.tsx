import { Avatar, Box, Heading, HStack, VStack, Image, Text, Spinner } from "@chakra-ui/react";

interface CityCardProps {
  cityImage: string;
  cityName: string;
  countryName: string;
  countryAvatar: string;
}

export function CityCard({cityImage, cityName, countryName, countryAvatar}: CityCardProps ) {
  return (
    <Box
      w='16rem'
      display='flex'
      flexDir='column'
      borderRadius='.5rem'
      >
      <Image 
        src={cityImage}
        height='11rem'
        borderTopRadius='inherit'
        fallback={
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            p='2rem'
            h='11rem'
            w='100%'
          >
            <Spinner />
          </Box>
        }
      />
      <VStack
        justifyContent='space-between'
        alignItems='center'
        p='1.5rem'
        border='.1rem solid'
        borderColor='highlight.500'
        borderBottomRadius='inherit'
      >
        <Heading
          fontSize='1.25rem'
          color='dark.600'
          mb='.75rem'
        >
          {cityName}
        </Heading>
        <HStack spacing='3rem'>
          <Text
            fontSize='1rem'
            color='dark.100'
            textAlign='center'
          >
            {countryName}
          </Text>
          <Avatar size='md' src={countryAvatar}/>
        </HStack>
      </VStack>
    </Box>
  );
}