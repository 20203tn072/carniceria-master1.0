import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeStack() {
  return (
    <View style={styles.container}>
      <Text>HomeStack</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 16
  },
})