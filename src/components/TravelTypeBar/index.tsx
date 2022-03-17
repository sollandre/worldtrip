import { Flex, Grid, useBreakpointValue, Image, GridItem } from "@chakra-ui/react";
import { TravelType } from "./TravelType";
import { TravelTypeMobile } from "./TravelTypeMobile";

interface TravelType {
  key: number;
  image: string;
  title: string;
}

export function TravelTypeBar() {

  const isMobile = useBreakpointValue([true, false]);

  const travelTypes: TravelType[] = [
    { key: 1, title: 'vida noturna', image: '/cocktail.svg'},
    { key: 2, title: 'praia', image: '/surf.svg' },
    { key: 3, title: 'moderno', image: '/building.svg'},
    { key: 4, title: 'clássico', image: '/museum.svg'},
    { key: 5, title: 'e mais...', image: '/earth.svg'}
  ]
  return (
    <>
      {!isMobile ?
        <Flex
          w='100%'
          align='center'
          justify='space-evenly'
          my={[20]}
          paddingTop={[8]}
        >
          { 
            travelTypes.map(({title, image, key} ) => {
              return <TravelType title={title} image={image} key={key} />  
            })
          }
        </Flex>
        :
        <Grid
          as='ul'
          templateColumns='1fr 1fr'
          w='100%'
          px='12'
          py='9'
          gap={6}
        >
          { 
            travelTypes.map((type, index) => {
              const indexOdd = index%2 != 0;
              const isLastElement = index === travelTypes.length-1;

              return (
                <GridItem
                  as='li'
                  key={type.key}
                  listStyleType='none'
                  justifySelf={indexOdd ? 'end' : isLastElement ? 'center' : 'start'}
                  colSpan={!indexOdd && isLastElement ? 2 : 1 }
                >
                  <TravelTypeMobile title={type.title} image={type.image} />
                </GridItem> 
              );
            })
          }
        </Grid>
      }
    </>
  );
}