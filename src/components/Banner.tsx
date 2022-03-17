import { Flex, Heading, Stack, Text, Image, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {

  const isMobile = useBreakpointValue([true, false])

  return (
    <Flex
      px={[4 ,36]}
      backgroundImage='/Background.png'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      justifyContent='space-between'
      align='center'
      w='100%'
      h={['10rem', '20rem']}
    >
      <Stack spacing={[2 ,5]} w={['100%', '45%']}>
        <Heading
          color='light.200'
          fontSize={['lg', '4xl']}
        >
          5 Continentes,<br /> 
          infinitas possibilidades.
        </Heading>
        <Text
          fontSize={['sm','xl']}
          color='light.500'
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
      {!isMobile &&
        <Image 
          src="/Airplane.png"
          alignSelf='flex-end'
          mb={-8}
        />
      }
    </Flex>
  );
}