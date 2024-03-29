/* eslint-disable prettier/prettier */
import { TextInput as T } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  color,
  size,
  space,
  border,
  typography,
  borderRadius,
  shadow
} from 'styled-system'
import theme from '../utils/theme'
const Input = styled(T).attrs((props) => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999'
}))(compose(typography, space, border, color, size, borderRadius, shadow))

export default Input
