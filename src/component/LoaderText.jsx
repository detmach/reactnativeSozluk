import React from 'react'
import Box from './box'
import theme from '../utils/theme'

function LoaderText({ ...props }) {
  return <Box bg={theme.colors.light} width={120} height={16} {...props} />
}

export default LoaderText
