/* eslint-disable prettier/prettier */
import { Text as T } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, space, border, typography } from 'styled-system'

const Text = styled(T)(compose(typography, space, border, color, size))

export default Text
