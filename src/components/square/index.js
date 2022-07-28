import { View, Text , Image} from 'react-native'
import { memo, PureComponent, useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import api from '../../../services/api'
import styles from './styles'

const Square = (props) => {
  const [pokeNAME, setInfoPoke] = useState({})
  const [poketype, setpoketype] = useState()
  const [pokesprite, setpokesprite] = useState("a")
  const [pokeid, setpokeid] = useState()
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
  

    var size = 1
    useEffect(() => {
      setInfoPoke(props.PokeNAME)
      setpoketype(props.typePOKE)
      setpokesprite(props.sprite)
      setpokeid(props.id)

    if((poketype) == "water"){
      setwater(true);
        }
    else if(poketype == "fire"){
      settypefire(true)
    }
    else  if(poketype == "grass"){
      setGrass(true)
    }
    else if(poketype == "normal"){
      setnormal(true)
    }
    else if(poketype == "bug"){
      setbug(true)
    }
    else if(poketype == "poison"){
      setpoison(true)
    }
    else if(poketype == "dark"){
      setdark(true)
    }
    else if(poketype == "dragon"){
      setdragon(true)
    }
    else if(poketype == "electric"){
      seteletric(true)
    }
    else if(poketype == "fairy"){
      setfairy(true)
    }
    else if(poketype == "fighting"){
      setfighting(true)
    }
    else if(poketype == "flying"){
      setflying(true)
    }
    else if(poketype == "ghost"){
      setghost(true)
    }

    else if(poketype == "ground"){
      setground(true)
    }

    else if(poketype == "ice"){
      setice(true)
    }
    else if(poketype == "psychic"){
      setpsychic(true)
    }

    else if(poketype == "rock"){
      setrock(true)
    }

    else if(poketype == "steel"){
      setsteel(true)
    }



      },[types]);


    return (
      <View style={{zIndex: -1}}>
       {renderElement(typewater, typeGrass, typefire, typebug,typenormal, typepoison, typedark, typedragon, typeeletric, typefairy, typefighting, typeflying, typeghost,  typeground, typeice, typepsychic, typerock, typesteel, pokeNAME, pokesprite, pokeid)}
      </View>
    )
  }
  export default memo(Square);

 function renderElement(typewater, typeGrass, typefire,typebug,typenormal, typepoison, typedark, typedragon, typeeletric, typefairy, typefighting, typeflying, typeghost,  typeground, typeice, typepsychic, typerock, typesteel, pokeNAME, pokesprite, pokeid){
    if(typewater == true){
      return(
        <View style={styles.secondviewBlue}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/water.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>
        
        </View>
      );
    }
    if(typeGrass == true){
      return(
        <View style={styles.secondviewGreen}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/grass.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>
       
        
        </View>
      );
    }
    if(typefire == true){
      return(
        <View style={styles.secondviewRed}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/fire.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typebug == true){
      return(
        <View style={styles.secondviewBug}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/bug.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typenormal == true){
      return(
        <View style={styles.secondviewNormal}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/normal.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typepoison == true){
      return(
        <View style={styles.secondviewPoison}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/poison.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typedark == true){
      return(
        <View style={styles.secondviewDark}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/dark.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typedragon == true){
      return(
        <View style={styles.secondviewDragon}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/dragon.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeeletric == true){
      return(
        <View style={styles.secondviewEletric}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/eletric.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typefairy == true){
      return(
        <View style={styles.secondviewFairy}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/fairy.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typefighting == true){
      return(
        <View style={styles.secondviewFighting}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/fighting.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeflying == true){
      return(
        <View style={styles.secondviewFlying}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/flying.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeghost == true){
      return(
        <View style={styles.secondviewGhost}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/ghost.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeground == true){
      return(
        <View style={styles.secondviewGround}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/ground.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typeice == true){
      return(
        <View style={styles.secondviewIce}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/ice.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typepsychic == true){
      return(
        <View style={styles.secondviewPsychic}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/psychic.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typerock == true){
      return(
        <View style={styles.secondviewRock}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/rock.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
    if(typesteel == true){
      return(
        <View style={styles.secondviewSteel}>
        <Text style={styles.idpoke}>{"#" + pokeid}</Text>
        <Text style={styles.pokename}>{pokeNAME}</Text>
        <Image style={styles.typeimage} source={require("pokemon/src/assets/types/steel.png")}/>
        <Image style={styles.pokeimage} source={{uri:pokesprite}}/>

        </View>
      );
    }
      
    
  }
  