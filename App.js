import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BB = (props) => {
  const [value, setValue] = useState()
  const [isPress, setisPress] = useState(false)
  const handlePress = () => {
    if (!isPress) {
      if (props.player) {
        setValue("X")
        props.changePlayer()
      }
      else {
        setValue("0")
        props.changePlayer()
      }
      setisPress(true)
    }

  }

  return (
    <TouchableOpacity style={{ padding: 20, backgroundColor: "black", margin: 10 }} onPress={handlePress}>
      <Text style={{ color: "white" }}>{value}</Text>
    </TouchableOpacity>

  )
}

export default function App() {
  
  
  const [player, setPlayer] = useState(true)
  const changePlayer= ()=>{
    setPlayer(!player)
  }
  return (
    <View style={styles.container}>
      <Text>Player 2: X</Text>
      {/* first line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player}/>
        <BB changePlayer={changePlayer} player={player}/>
        <BB changePlayer={changePlayer} player={player}/>
      </View>
      {/* second line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player}/>
        <BB changePlayer={changePlayer} player={player}/>
        <BB changePlayer={changePlayer} player={player}/>
      </View>
      
      {/* third line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player}/>
        <BB changePlayer={changePlayer} player={player}/>
        <BB changePlayer={changePlayer} player={player}/>
      </View>
      <Text>Player 1: 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flexDirection: "row",
    paddingBottom: 10,
  },
});
