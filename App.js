
import { StyleSheet, Text, View,ScrollView, FlatList } from 'react-native';

import Main from './src/components/main';
import Index from './src/components/each poke';

export default function App() {

  
  return (
   <View style={styles.container}>

  <Main/>
   </View >
    

  );
}


const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    
    
  },
});

