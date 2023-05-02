import React, { useEffect } from 'react'
import { ApiServices } from './utils/Services'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './component/tab-bar'
import FavoriView from './views/favorite'
import HistoryView from './views/history'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'

import theme from './utils/theme'
import SearchView from './views/search'
import DetailView from './views/detail'
import { Button } from './component'
import { Left } from './component/icons'

const StackSearch = createStackNavigator()

function SearchPage() {
  return (
    <StackSearch.Navigator>
      <StackSearch.Screen
        name="Search"
        options={{ headerShown: false }}
        component={SearchView}
      />
      <StackSearch.Screen
        name="Detail"
        component={DetailView}
        options={({ route, navigation }) => {
          return {
            title: route.params?.title,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: theme.colors.transparent
            },
            headerLeft: () => (
              <Button
                px={10}
                height="100%"
                onPress={() => navigation.navigate('Search')}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            )
            // headerRight: () => (
            //   <Button
            //     px={10}
            //     height="100%"
            //     onPress={() => navigation.navigate('Search')}
            //   >
            //     <More color={theme.colors.textDark} />
            //   </Button>
            // )
          }
        }}
      />
    </StackSearch.Navigator>
  )
}

function Navigation() {
  const Tab = createBottomTabNavigator()
  var t = ApiServices.getInstance()
  useEffect(() => {
    t.AllData().then()
  }, [t])

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Searchx'}
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Favorite" component={FavoriView} />
        <Tab.Screen
          name="Searchx"
          component={SearchPage}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="History" component={HistoryView} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
