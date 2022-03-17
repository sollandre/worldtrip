import { Divider, Heading } from "@chakra-ui/react"
import { Banner } from "../components/Banner"
import { Carousel } from "../components/Carousel"
import { Header } from "../components/Header"
import { TravelTypeBar } from "../components/TravelTypeBar"

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypeBar />
      <Divider
        w={['4rem', '8rem']}
        borderColor='dark.600'
        borderWidth='1px'
        opacity='1'
        margin='auto'
      />
      <Heading
        fontSize={['1.25rem', '2.25rem']}
        color='dark.600'
        my={['6', '14']}
        textAlign='center'
        lineHeight={[null,'4rem']}
      >
        Vamos nessa?<br />
        Então escolha seu continente.
      </Heading>
      <Carousel />
    </>
  )
}
