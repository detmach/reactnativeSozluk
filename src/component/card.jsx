import React from 'react'
import { Box, Button, Text } from './index'
import theme from '../utils/theme'

export function CardContainer({ children, ...props }) {
  return (
    <Button
      {...props}
      bg={theme.colors.white}
      borderRadius={theme.radii.normal}
      py={16}
      px={12}
    >
      <Box
        flex={1}
        borderLeftWidth={3}
        borderLeftColor={theme.colors.red}
        pl={12}
      >
        {children}
      </Box>
    </Button>
  )
}

export function CardTitle({ children, ...props }) {
  return (
    <Text fontSize={18} fontWeight={'bold'}>
      {children}
    </Text>
  )
}
export function CardSummary({ children, ...props }) {
  return (
    <Text color={theme.colors.textMedium} fontSize={14} mt={8}>
      {children}
    </Text>
  )
}
