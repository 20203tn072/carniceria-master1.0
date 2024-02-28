import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FavoritesStack() {
  return (
    <View style={styles.container}>
      <Text>FavoritesStack</Text>
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