import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements';

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style="dark"/>
      <Image source={{
        uri:"https://api.freelogodesign.org/files/40d157802af94d9e82256512d60e5825/thumb/logo_200x200.png?v=0",
      }}
      style={{width: 200, height: 200}}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
