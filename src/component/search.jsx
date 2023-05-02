/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react'
import { Input, Text, Box, Button } from './index'
import { Search, Close } from './icons'
import theme from '../utils/theme'
import { Keyboard, Platform } from 'react-native'
function SearchBox({ onChangeFocus, setSearchText, SearchText, navigation }) {
  const [IsFocus, setFocus] = useState(false)
  console.log(SearchText, 'searchText')
  const searchInputRef = useRef(null)
  const historyData = useEffect(() => {
    onChangeFocus(IsFocus)
    if (!IsFocus) {
      Keyboard.dismiss()
    } else {
      searchInputRef.current.focus()
    }
  }, [IsFocus, onChangeFocus])

  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
  //     setFocus(true)
  //   })
  //   const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
  //     setFocus(false)
  //   })

  //   return () => {
  //     showSubscription.remove()
  //     hideSubscription.remove()
  //   }
  // })

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      px={Platform === 'IOS' ? 0 : 10}
    >
      <Box position={'relative'} flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.16,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4
            }
          }}
          ref={searchInputRef}
          borderWidth={1}
          borderColor={
            IsFocus ? theme.colors.InputFocus : theme.colors.transparent
          }
          name="SearchInput"
          bg={theme.colors.white}
          color={theme.colors.textDark}
          height={52}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor={theme.colors.textMedium}
          keyboardType="twitter"
          borderRadius={theme.radii.normal}
          onFocus={() => setFocus(true)}
          value={SearchText}
          onSubmitEditing={(e) =>
            navigation.navigate('Detail', {
              title: 'Detail',
              kelime: SearchText
            })
          }
          pl={52}
          onChange={(e) => setSearchText(e.nativeEvent.text)}
        />
        {SearchText.length > 0 && (
          <Box position={'absolute'} zIndex={99} right={16} top={14}>
            <Close
              color={theme.colors.textDark}
              onPress={() => setSearchText('')}
            />
          </Box>
        )}
      </Box>

      <Box position={'absolute'} zIndex={99} left={22} top={14}>
        <Search
          color={theme.colors.textMedium}
          onPress={(e) => setFocus(true)}
        />
      </Box>
      {IsFocus ? (
        <Button px={15} height={52} onPress={() => setFocus(false)}>
          <Text color={theme.colors.textDark}>Vazgeç</Text>
        </Button>
      ) : (
        ''
      )}
    </Box>
  )
}
export default SearchBox
