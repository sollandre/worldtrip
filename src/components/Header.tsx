import { Flex, Img } from "@chakra-ui/react";

export function Header(){
  return (
    <Flex
      w='100%'
      bg='white'
      h={['50px', '100px']}
      align='center'
      justify='center'
      p={[4, 7]}
    >
      <Img
        src="/logo.svg"
        maxH={['20px', '45px']}
      />
    </Flex>
  );
}