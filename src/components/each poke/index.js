import { View, Text , StatusBar} from 'react-native'
import React from 'react'
import Square from '../square'
import styles from './styles'


export default function Index(props) {
    var pokes =  []
    for (let x = props.FirstPoke; x <= props.LastPoke; x++){
    pokes.push(
        <View key={x}>
            <Square PokeID={x.toString()}/>
            
        </View>
    )
   
    
    }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff"/>
      {pokes}
    </View>
  )
}