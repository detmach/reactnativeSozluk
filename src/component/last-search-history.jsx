import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Box, Text } from './'
import { SimleCardContainer, SimleCardTitle } from './simplecard'
import theme from '../utils/theme'

function SearchHistoryList({ navigation, ...props }) {
  const { setSearchText, data } = props
  const [SearchData, setSearchData] = useState(null)

  useEffect(() => {
    data.HistoryGetList().then((s) => setSearchData(s))
  }, [])

  return (
    <FlatList
      style={{ padding: 16 }}
      data={SearchData}
      ListHeaderComponent={(index) => (
        <Text key={index} color={theme.colors.textLight} mb={10}>
          Son Aramalar
        </Text>
      )}
      renderItem={({ item, index, separators }) => (
        <Box key={item.Id} py={6}>
          <SimleCardContainer
            onPress={(e) => {
              setSearchText(item.Name)
              navigation.navigate('Detail', {
                title: 'Detail',
                kelime: item.Name
              })
            }}
          >
            <SimleCardTitle>{item.Name}</SimleCardTitle>
          </SimleCardContainer>
        </Box>
      )}
      keyExtractor={(item) => item.Id}
    />
  )
}

export default SearchHistoryList
