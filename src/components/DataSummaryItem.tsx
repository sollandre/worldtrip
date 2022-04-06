import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, IconButton, Text, Tooltip } from "@chakra-ui/react";

interface DataSummaryItemProps {
  number: number,
  text: string,
  tooltipMessage?: string;
}

export function DataSummaryItem({number, text, tooltipMessage}: DataSummaryItemProps){
  const textElement = (
    <Text
        color='darkblue.600'
        fontWeight='bold'
        fontSize={['md','2xl']}
      >
        {text}
    </Text>
  )
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Heading
        color='highlight.500'
        fontSize={['2xl','5xl']}
      >
        {number}
      </Heading>
      { !!tooltipMessage ?
        <Box
          display='flex'
          alignItems='center'
        >
          {textElement}
          <Tooltip label={tooltipMessage} bg='light.500' color='dark.600' placement="bottom" closeOnClick={false} fontSize={['xs', 'md']}>
            <IconButton
              size='1rem'
              background='none'
              p='none'
              ml='5px'
              aria-label="Tooltip button"
              _focus={
                {
                  'border': 'none'
                }
              }
              icon={<QuestionOutlineIcon />}
              color='dark.100' 
            />
          </Tooltip>
        </Box>
        
        :
        textElement
      }
    </Box>
  );
}