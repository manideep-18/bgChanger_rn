import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'

const App=()=>{
  return(
    <>
    <View style={[styles.container,{backgroundColor:"rgb(32,0,126)"}]}>
      <Text>Manideep Ramapuram</Text>
    </View>
    </>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})