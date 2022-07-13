import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Index from '../each poke'
import styles from './styles'
import { useState } from 'react'
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';


export default function Main() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });
  return (
    <View style={styles.container}>
      <Image style={styles.pokeball } source={require("pokemon/src/assets/pokebal.png")}/>
      <Text style={styles.title }>Pokédex</Text>
   <Index FirstPoke={1} LastPoke={150}/>
   
    </View>
  )
}