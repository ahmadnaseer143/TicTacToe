import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BB = (props) => {
  const [value, setValue] = useState("")
  const [isPress, setisPress] = useState(false)
  const handlePress = () => {
    if (!isPress) {
      if (props.player) {
        setValue("X")
        props.changePlayer()
        // console.log(typeof props.btnNumber);
        props.winPlayer(props.btnNumber)
      }
      else {
        setValue("O")
        props.changePlayer()
        // console.log(typeof props.btnNumber);
        props.winPlayer(props.btnNumber)
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
  
  const [board, setBoard] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ]);

  const [player, setPlayer] = useState(true)
  const changePlayer= ()=>{
    setPlayer(!player)
  }

  const winPlayer=(val)=>{
    if(val==1){
      if(player) setBoard(board[0][0]="X")
      else setBoard(board[0][0]="O")
    }
    else if(val==2){
      if(player) setBoard(board[0][1]="X")
      else setBoard(board[0][1]="O")
    }
    else if(val==3){
      if(player) setBoard(board[0][2]="X")
      else setBoard(board[0][2]="O")
    }
    else if(val==4){
      if(player) setBoard(board[1][0]="X")
      else setBoard(board[1][0]="O")
    }
    else if(val==5){
      if(player) setBoard(board[1][1]="X")
      else setBoard(board[1][1]="O")
    }
    else if(val==6){
      if(player) setBoard(board[1][2]="X")
      else setBoard(board[1][2]="O")
    }
    else if(val==7){
      if(player) setBoard(board[2][0]="X")
      else setBoard(board[2][0]="O")
    }
    else if(val==8){
      if(player) setBoard(board[2][1]="X")
      else setBoard(board[2][1]="O")
    }
    else if(val==9){
      if(player) setBoard(board[2][2]="X")
      else setBoard(board[2][2]="O")
    }
    console.log(board);
  }
  return (
    <View style={styles.container}>
      <Text>Player 2: X</Text>
      {/* first line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={1}/>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={2}/>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={3}/>
      </View>
      {/* second line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={4}/>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={5}/>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={6}/>
      </View>
      
      {/* third line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={7}/>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={8}/>
        <BB changePlayer={changePlayer} player={player} winPlayer={winPlayer} btnNumber={9}/>
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