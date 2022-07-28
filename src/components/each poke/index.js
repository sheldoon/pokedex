import { View, Text , StatusBar, FlatList, TouchableOpacity} from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import Square from '../square'
import styles from './styles'
import api from '../../../services/api'





export default function Index(props) {
  const [PokeName, setPokeName] = useState("")
  const [poketype, setpoketype] = useState("")
  const [arraytype , setarraytype] = useState([])
  const [arraySprite, setArraySprite] = useState([])
  const [pokeID, setpokeid] = useState(1)
  const [idArray, setid] = useState([])
  const [pokearray, setpokearray] = useState([])
  const [data,setdata] = useState ([])
  const [loading, setloading] =  useState(false)
  
 
 
 useEffect(()=>{
    loadAPI();
    
  },[]);

  async function loadAPI(){

    if(loading) return;
    setloading(true)
 
 await api.get(pokeID.toString()).then((response) => {
    setPokeName(response.data.name) 
    setpokearray([...pokearray,response.data.name])
   setid([...idArray,response.data.id.toString()])
   setArraySprite([...arraySprite,response.data.sprites.other["official-artwork"].front_default])
   setpoketype(response.data.types[0].type.name) 
   setarraytype([...arraytype,response.data.types[0].type.name]) 
  });
    
    setdata([...data,  [PokeName,poketype]])
    
   setpokeid(pokeID + 1)
   setloading(false)
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff"/>
      <FlatList
      data={data}
      extraData={pokeID}
      keyExtractor={(item, index) => index}
      style={
        {
          zIndex:10,
        }
      }
      renderItem={({item,index})=> {
        return(
          <TouchableOpacity>
          <Square PokeNAME={pokearray[index]} typePOKE={arraytype[index]} sprite={arraySprite[index]} id={idArray[index]}/> 
          </TouchableOpacity>
        );
      }
      
    
    }
   onEndReached={loadAPI}
    onEndReachedThreshold={0.8}
    initialNumToRender={3}
    removeClippedSubviews={true}
    maxToRenderPerBatch={7}
      />
    </View>
  )
  
}









