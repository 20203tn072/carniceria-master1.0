import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/base'
import React from 'react'


export default function Perfil({ setUserLoggedIn }) {

  const logout = () => {
    setUserLoggedIn(false);
  };
  return (
    <View style={styles.container}>
      <Text>Anna Hernandez</Text>
      <Button
        title='Cerrar Sesion'
        onPress={logout}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        titleStyle={{ color: 'white' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
    padding: 16,
  },
  btnStyle: {
    backgroundColor: '#A2160F',
    borderRadius: 30,
  },
  btnContainer: {
    width: '80%',
    marginTop: 10, // Puedes ajustar este valor según tus preferencias
    marginBottom: 10,
  }
})