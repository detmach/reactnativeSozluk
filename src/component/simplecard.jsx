import React from 'react'
import { Button, Text } from './index'
import theme from '../utils/theme'

export function SimleCardContainer({ children, ...props }) {
  return (
    <Button
      justifyContent="flex-start"
      bg={theme.colors.white}
      borderRadius={theme.radii.normal}
      p={16}
      {...props}
    >
      {children}
    </Button>
  )
}

export function SimleCardTitle({ children, ...props }) {
  return (
    <Text fontSize={16} fontWeight="bold">
      {children}
    </Text>
  )
}
