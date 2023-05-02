import React from 'react'
import { Box, Text } from './index'

import { CardContainer, CardTitle, CardSummary } from './card'

import theme from '../utils/theme'

function SuggestionCard({ ...props }) {
  const { data, OnPress, navigation, title } = props
  return (
    <Box {...props}>
      <Text color={theme.colors.textLight}>{title}</Text>
      <CardContainer
        mt={10}
        onPress={() =>
          navigation.navigate('Detail', {
            title: 'Detail',
            kelime: data[0].madde
          })
        }
      >
        <CardTitle>{data[0].madde}</CardTitle>
        <CardSummary>{data[0].anlam}</CardSummary>
      </CardContainer>
    </Box>
  )
}

export default SuggestionCard
