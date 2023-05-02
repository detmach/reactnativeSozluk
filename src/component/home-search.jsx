import React, { useEffect, useRef } from 'react'
import { Box } from './index'
import { Animated } from 'react-native'
import Search from './search'
import Bg from './bg'
import { Logo } from './icons'
import theme from '../utils/theme'
function HomeSearch({ ...props }) {
  const { IsSearchFocus, setIsSearchFocus, SearchText, setSearchText } = props
  const HERO_HEIGHT = 230

  const heroHeight = useRef(new Animated.Value(HERO_HEIGHT)).current
  const bgOpacity = useRef(new Animated.Value(1)).current
  useEffect(() => {
    if (IsSearchFocus) {
      //yeni
      // t.HistoryUpdateList('semih').then()
      // t.HistoryGetList().then((t) => console.log(t))

      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
      //diğeri
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 100,
        useNativeDriver: true
      }).start()
    } else {
      //yeni
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
      //diğeri
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 100,
        useNativeDriver: true
      }).start()
    }
  }, [heroHeight, IsSearchFocus, bgOpacity])
  return (
    <Box
      as={Animated.View}
      position="relative"
      zIndex={1}
      height={IsSearchFocus ? 100 : heroHeight}
    >
      {/* Backround */}
      <Box mt={-60} as={Animated.View} style={{ opacity: bgOpacity }}>
        <Bg pt={60} pb={26}>
          {/* Logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo width={120} height={60} color={theme.colors.white} />
          </Box>
        </Bg>
      </Box>

      {/* arama Kutusu */}
      <Box
        position="absolute"
        left={0}
        bottom={IsSearchFocus ? 0 : -42}
        p={16}
        width={'100%'}
      >
        <Search
          navigation={props.navigation}
          setSearchText={setSearchText}
          SearchText={SearchText}
          onChangeFocus={(status) => setIsSearchFocus(status)}
        />
      </Box>
    </Box>
  )
}

export default HomeSearch
