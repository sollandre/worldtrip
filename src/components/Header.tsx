import { Flex, Img, Spacer } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";
import NextLink from 'next/link'

export function Header(){
  const router = useRouter()

  const isHomePage = router.pathname === '/'; 

  return (
    <Flex
      w='100%'
      bg='white'
      h={['50px', '100px']}
      align='center'
      justify='center'
      py={[4, 7]}
      px={['1rem', '9rem']}
    >
      {
        !isHomePage &&
          <>
            <ChevronLeftIcon 
              onClick={(e) => {
                e.preventDefault();
                router.back();
              }}
              boxSize={['1rem','2rem']}
              cursor='pointer'
              color='darkblue.600'
            />
          </>
      }
      <Img
        src="/logo.svg"
        maxH={['20px', '45px']}
        m='0 auto'
        onClick={(e) => {
          e.preventDefault()
          router.push('/')
        }}
        cursor='pointer'
      />
    </Flex>
  );
}