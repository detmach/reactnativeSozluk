/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native'
import * as React from 'react'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import theme from '../utils/theme'

function HistoryView() {
  return (
    <View style={styles.title}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white}
      />
      <Text>Merhaba Dünya Search ... </Text>
    </View>
  )
}
export default HistoryView

const styles = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
