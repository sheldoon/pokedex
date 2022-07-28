import { StyleSheet } from "react-native";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


const styles = StyleSheet.create({
  
    container: {
      
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
     
      
    },
    scroll:{
      
      width: "100%",
      height: "100%",
      
      
    },
    pokeball:{
      position: "absolute",
      width: "100%",
      height: 214,
      top: 0,
      left: 0,
      zIndex: -1,
    },

    title:{
      fontSize: 32,
      width: 300,
      position: "absolute",
      top: 100,
      left: 40,
    },
    subtitle:{
      top: 148,
      left: 40,
      position: "absolute",
      width: 300,
      fontSize: 16,
      lineHeight: 19,
      
    },
    searchimg:{
      position: "absolute",
      width: 16,
      height: 16,
      left: 55,
      top: 233,
      marginRight:22
    },
    input:{
      width: 334,
      height: 60,
      position: "relative",
      top: 211,
      backgroundColor: "#f2f2f2",
      borderRadius: 10,
      paddingLeft: 50,
    },

    secondview:{
      
      width: "100%",
      height: "100%",
      justifyContent: 'center',
      flexDirection: "row",
     
      
    
    },


  });

  export default styles