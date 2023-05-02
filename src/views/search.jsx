import React, { useEffect, useState } from 'react'
import { Box } from '../component'
import theme from '../utils/theme'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApiServices from '../utils/Services'
import SuggestionCard from '../component/suggestion-card'
import SearchHistoryList from '../component/last-search-history'
import HomeSearch from '../component/home-search'

function SearchView({ navigation }) {
  const [SearchText, setSearchText] = useState('')
  const [IsSearchFocus, setIsSearchFocus] = useState(true)
  const [AtaSozu, setAtaSozu] = useState(null)
  const [Kelime, setKelime] = useState(null)

  const t = ApiServices.getInstance()

  useEffect(() => {
    t.AtaSozuGetir().then((s) => setAtaSozu(s))
    t.KelimeGetir().then((s) => setKelime(s))
  }, [])

  return (
    <Box
      as={SafeAreaView}
      bg={IsSearchFocus ? theme.colors.softRed : theme.colors.red}
      flex={1}
    >
      {/*Üstdeki status bar*/}
      {!IsSearchFocus ? (
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.red}
        />
      ) : (
        <FocusAwareStatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.white}
        />
      )}

      {/* Header Başlangıç*/}
      <HomeSearch
        navigation={navigation}
        IsSearchFocus={IsSearchFocus}
        setSearchText={setSearchText}
        setIsSearchFocus={setIsSearchFocus}
        SearchText={SearchText}
      />

      {/* Header Bitiş */}
      <Box flex={1} bg={theme.colors.softRed} pt={IsSearchFocus ? 0 : 26}>
        {/* <Box as={ScrollView}> */}
        {/* <ActivityIndicator /> */}

        {IsSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList
              setSearchText={setSearchText}
              data={t}
              navigation={navigation}
            />
          </Box>
        ) : (
          <Box flex={1} px={16} py={40}>
            {Kelime && (
              <SuggestionCard
                mt={0}
                data={Kelime}
                navigation={navigation}
                title={'Bir Kelime'}
              />
            )}
            {AtaSozu && (
              <SuggestionCard
                mt={40}
                data={AtaSozu}
                navigation={navigation}
                title={'Bir Atasözü'}
              />
            )}
          </Box>
        )}
        {/* </Box> */}
      </Box>
    </Box>
  )
}

export default SearchView
