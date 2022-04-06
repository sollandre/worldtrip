import { Avatar, Box, Container, Heading, HStack, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPropsContext, NextPageContext } from "next";
import { DataSummaryItem } from "../../components/DataSummaryItem";

import cities100 from "../../../cities_100.json"
import { stringify } from "querystring";
import { CityCard } from "../../components/CityCard";
import { api } from "../../services/citiesData";

interface ContinentProps {
  id: number;
  continentName: string;
  continentCover: string;
  description: string;
  countryCount: number;
  languageCount: number;
  cities100Count: number;
  cities: [{
    id: number;
    cityImage: string;
    cityName: string;
    countryName: string;
    countryAvatar: string;
  }]
}

export default function Continent(props: ContinentProps) {
  const { cities, ...continentData } = props
  return (
    <>
      {/* --------------------- Continent Banner -----------------*/}
      <Box
        h={['12rem', '2xl']}
        w='100%'
        display='flex'
        justifyContent={['center', 'start']}
        alignItems={['center', 'end']}
        backgroundImage={[
          continentData.continentCover,
          `${continentData.continentCover}&w=1920&h=700&fit=fill&fill=blur`
        ]}
        backgroundSize='100% 100%'
        px={['0', '36']}
        py={['0', '20']}
      >
        <Heading
          color='light.50'
          fontWeight='500'
          fontSize={['4xl', '5xl']}
        >
          {continentData.continentName}
        </Heading>
      </Box>
      {/* --------------------- ------------------ -----------------*/}
      <Box
        mx={['4', '36']}
      >
        <Box
          display='flex'
          flexWrap='wrap'
          justifyContent='space-between'
          alignContent='center'
          my={['7', '20']}
        >
          <Text
            fontSize={['sm', '2xl']}
            lineHeight={['1.5rem', '2.25rem']}
            color='dark.600'
            maxWidth={['100%', '60%']}
            textAlign='justify'
          >
            {continentData.description}
          </Text>
          <HStack spacing={['2.75rem']} ml={['0', '4.5rem']} mt={['1rem', '0']}>
            <DataSummaryItem number={continentData.countryCount} text='países' />
            <DataSummaryItem number={continentData.languageCount} text='linguas' />
            <DataSummaryItem number={continentData.cities100Count} text='cidades +100' tooltipMessage="Cidades dentre as 100 mais visitadas no mundo" />
          </HStack>
        </Box>
        {/* --------------------- City Information Section -----------------*/}
        <Heading
          fontSize={['1.5rem', '2.25rem']}
          fontWeight={['500', '700']}
          color='dark.600'
          mt={['2rem', '5rem']}
          mb={['1.25rem', '2.5rem']}
        >
          Cidades +100
        </Heading>
        <Wrap
          spacing={['1.25rem', '3rem']}
          mb='3rem'
          justify={['center', 'start']}
        >
          {
            cities.map((cityInformation) => {
              const { id, ...cityCardProps} = cityInformation;
              return(
                <WrapItem key={id}>
                  <CityCard
                    {...cityCardProps}
                  />
                </WrapItem>
              )
            })
          }
        </Wrap>
        {/* --------------------- ------------------------- -----------------*/}
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { 'continent': 'europe' } },
      { params: { 'continent': 'asia' } },
      { params: { 'continent': 'africa' } },
      { params: { 'continent': 'na' } },
      { params: { 'continent': 'sa' } },
      { params: { 'continent': 'oceania' } },
    ],
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {

  const { continent } = context.params

  let continentName
  switch (continent) {
    case 'europe':
      continentName = 'Europa'
      break
    case 'asia':
      continentName = 'Asia'
      break
    case 'africa':
      continentName = 'Africa'
      break
    case 'na':
      continentName = 'America do Norte'
      break
    case 'sa':
      continentName = 'America do Sul'
      break
    case 'oceania':
      continentName = 'Oceania'
      break
  }

  const response = await api.get('/continents', {
    params: {
      "_embed": "cities",
      continentName: continentName
    }
  })

  const {cities, ...continentData} = response.data[0]

  const citiesData = cities.map((city) => {
    const { id, cityName, cityImage, countryName, countryIcon } = city
    return {
      id,
      cityName,
      cityImage: `${cityImage}&w=256&h=176&auto=format&dpr=1`,
      countryName,
      countryAvatar: `/continents/flag_icons/${countryIcon}`
    }
  })

  const properties = {
    ...continentData,
    cities: citiesData
  }

  return {
    props: {
      ...properties
    }
  }
}