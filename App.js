
import { StyleSheet, Text, View,ScrollView, Dimensions } from 'react-native';
import Main from './src/components/main';
import Index from './src/components/each poke';
const windowHeight = (Dimensions.get('screen').height)*2;
export default function App() {

  
  return (
   <ScrollView  contentContainerStyle={styles.container}> 
   <Main/>
   </ScrollView >
    

  );
}


const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: 23000,
    flexGrow: 1,
    
  },
});

