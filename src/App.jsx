import { ThemeProvider } from 'styled-components'
import React, { useEffect } from 'react'
import theme from './utils/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ApiServices from './utils/Services'
import Navigation from './navigation'

function App() {
  var t = ApiServices.getInstance()
  useEffect(() => {
    t.AllData().then()
  }, [t])

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
export default App
