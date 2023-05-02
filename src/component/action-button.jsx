import React from 'react'
import Button from './button'
import theme from '../utils/theme'
function ActionButton({ children, ...props }) {
  return (
    <Button
      px={8}
      borderRadius={theme.radii.full}
      bg={theme.colors.white}
      minWidth={theme.sizes.actionButton}
      height={theme.sizes.actionButton}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.16,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2
        }
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ActionButton
