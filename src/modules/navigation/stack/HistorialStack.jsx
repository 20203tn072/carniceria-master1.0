import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HistorialStack() {
  return (
    <View style={styles.container}>
      <Text>HistorialStack</Text>
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