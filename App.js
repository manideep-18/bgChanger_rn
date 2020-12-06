import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,StatusBar} from 'react-native'

const App=()=>{

  const [randomColor,setRandomColor]=useState("rgb(32,0,126)")
  
  const handleBgColorChange=()=>{
    const color="rgb("+
                Math.floor(Math.random()*256)
                +','+
                Math.floor(Math.random()*256)
                +','+
                Math.floor(Math.random()*256)
                +')';
        setRandomColor(color);
  }

  const handleResetBgColor=()=>{
    setRandomColor('#000000');
  }

  return(
    <>
    <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container,{backgroundColor:randomColor}]}>
      <TouchableOpacity onPress={handleBgColorChange}>
        <Text style={styles.text}>Tap Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResetBgColor}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
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
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase",
    marginBottom:5
  }
})