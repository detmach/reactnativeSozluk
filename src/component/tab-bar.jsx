/* eslint-disable prettier/prettier */
import React from 'react'
import { Button, Box } from './index'
import { Search, Bookmark, RotateCcw } from './icons'
import theme from '../utils/theme'
import { Platform } from 'react-native'

function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
      pb={Platform === 'IOS' ? 20 : 10}
      bg={theme.colors.white}
      flexDirection="row"
      style={{
        shadowColor: theme.colors.textDark,
        shadowOpacity: 0.1,
        shadowRadius: 20
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        return label === 'Searchx' ? (
          <Box key={label} mt={-15} p={15} bg={'white'} borderRadius="full">
            <Button
              pt={1}
              size={56}
              bg={'red'}
              onPress={onPress}
              borderRadius="full"
            >
              <Search stroke={'white'} />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            flexDirection="column"
            pt={2}
            height={56}
            flex={1}
            onPress={onPress}
          >
            {label === 'History' ? (
              <RotateCcw
                stroke={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            ) : (
              <Bookmark
                stroke={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={4}
              bg={isFocused ? 'red' : 'white'}
              mt={6}
              borderRadius={'full'}
            />
          </Button>
        )
      })}
    </Box>
  )
}

export default TabBar
