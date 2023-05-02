import * as React from 'react'
import { Box } from '../component'
import { ImageBackground } from 'react-native'
import logo from '../assets/bg.jpg'
function bg({ children, ...props }) {
  return (
    <Box
      as={ImageBackground}
      source={logo}
      style={{ height: '100%', width: '100%' }}
      {...props}
    >
      {children}
    </Box>
  )
}
export default bg
