import { View, Text , Image} from 'react-native'
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import api from '../../../services/api'
import styles from './styles'

export default function Square(props) {
  const [infoPoke, setInfoPoke] = useState({})
  const [poketype, setpoketype] = useState("")
  const [pokesprite, setpokesprite] = useState("a")
  const [typeGrass, setGrass] = useState(false)
  const [typewater, setwater] = useState(false)
  const [typefire, settypefire] = useState(false)
  const [typenormal, setnormal] = useState(false)
  const [typebug, setbug] = useState(false)
  const [typepoison, setpoison] = useState(false)
  const [typedark, setdark] = useState(false)
  const [typedragon, setdragon] = useState(false)
  const [typeeletric, seteletric] = useState(false)
  const [typefairy, setfairy] = useState(false)
  const [typefighting, setfighting] = useState(false)
  const [typeflying, setflying] = useState(false)
  const [typeghost, setghost] = useState(false)
  const [typeground, setground] = useState(false)
  const [typeice, setice] = useState(false)
  const [typepsychic, setpsychic] = useState(false)
  const [typerock, setrock] = useState(false)
  const [typesteel, setsteel] = useState(false)

  var types = []

  api.get(props.PokeID).then((response) => {
    setInfoPoke(response.data) });
  api.get(props.PokeID).then((response) => {
      setpoketype(response.data.types[0].type) });
  api.get(props.PokeID).then((response) => {
    setpokesprite(response.data.sprites.other["official-artwork"].front_default)
  })
    var size = 1
    useEffect(() => {

    if((poketype.name) == "water"){
      setwater(true);
        }
    else if(poketype.name == "fire"){
      settypefire(true)
    }
    else  if(poketype.name == "grass"){
      setGrass(true)
    }
    else if(poketype.name == "normal"){
      setnormal(true)
    }
    else if(poketype.name == "bug"){
      setbug(true)
    }
    else if(poketype.name == "poison"){
      setpoison(true)
    }
    else if(poketype.name == "dark"){
      setdark(true)
    }
    else if(poketype.name == "dragon"){
      setdragon(true)
    }
    else if(poketype.name == "electric"){
      seteletric(true)
    }
    else if(poketype.name == "fairy"){
      setfairy(true)
    }
    else if(poketype.name == "fighting"){
      setfighting(true)
    }
    else if(poketype.name == "flying"){
      setflying(true)
    }
    else if(poketype.name == "ghost"){
      setghost(true)
    }

    else if(poketype.name == "ground"){
      setground(true)
    }

    else if(poketype.name == "ice"){
      setice(true)
    }
    else if(poketype.name == "psychic"){
      setpsychic(true)
    }

    else if(poketype.name == "rock"){
      setrock(true)
    }

    else if(poketype.name == "steel"){
      setsteel(true)
    }



      },[types]);


    return (
      <View style={{zIndex: -1}}>
       {renderElement(typewater, typeGrass, typefire, typebug,typenormal, typepoison, typedark, typedragon, typeeletric, typefairy, typefighting, typeflying, typeghost,  typeground, typeice, typepsychic, typerock, typesteel, infoPoke, pokesprite)}
      </View>
    )
  }

 function renderElement(typewater, typeGrass, typefire,typebug,typenormal, typepoison, typedark, typedragon, typeeletric, typefairy, typefighting, typeflying, typeghost,  typeground, typeice, typepsychic, typerock, typesteel, infoPoke, pokesprite){
    if(typewater == true){
      return(
        <View style={styles.secondviewBlue}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/water.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>
        
        </View>
      );
    }
    if(typeGrass == true){
      return(
        <View style={styles.secondviewGreen}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/grass.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>
       
        
        </View>
      );
    }
    if(typefire == true){
      return(
        <View style={styles.secondviewRed}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/fire.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typebug == true){
      return(
        <View style={styles.secondviewBug}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/bug.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typenormal == true){
      return(
        <View style={styles.secondviewNormal}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/normal.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typepoison == true){
      return(
        <View style={styles.secondviewPoison}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/poison.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typedark == true){
      return(
        <View style={styles.secondviewDark}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/dark.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typedragon == true){
      return(
        <View style={styles.secondviewDragon}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/dragon.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeeletric == true){
      return(
        <View style={styles.secondviewEletric}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/eletric.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typefairy == true){
      return(
        <View style={styles.secondviewFairy}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/fairy.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typefighting == true){
      return(
        <View style={styles.secondviewFighting}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/fighting.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeflying == true){
      return(
        <View style={styles.secondviewFlying}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/flying.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeghost == true){
      return(
        <View style={styles.secondviewGhost}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/ghost.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeground == true){
      return(
        <View style={styles.secondviewGround}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/ground.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeice == true){
      return(
        <View style={styles.secondviewIce}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/ice.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typepsychic == true){
      return(
        <View style={styles.secondviewPsychic}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/psychic.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typerock == true){
      return(
        <View style={styles.secondviewRock}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/rock.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typesteel == true){
      return(
        <View style={styles.secondviewSteel}>
        <Text style={styles.idpoke}>{"#" + infoPoke.id}</Text>
        <Text style={styles.pokename}>{infoPoke.name}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/steel.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
      
    
  }
  