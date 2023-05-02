import React from 'react'
import Text from './text'
import theme from '../utils/theme'
function ActionButtonTitle({ children, ...props }) {
  return (
    <Text {...props} color={theme.colors.textLight} mx={8} fontWeight={'bold'}>
      {children}
    </Text>
  )
}
export default ActionButtonTitle
