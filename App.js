import { StatusBar } from 'expo-status-bar';
import React, { useState,ReactInstanceManager } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import * as Updates from 'expo-updates';

const BB = (props) => {
  const [value, setValue] = useState("")
  const [isPress, setisPress] = useState(false)
  const handlePress = () => {
    if (!isPress) {
      if (props.player) {
        setValue("X")
        props.changePlayer()
        props.boardDecoration(props.btnNumber)
      }
      else {
        setValue("O")
        props.changePlayer()
        // console.log(typeof props.btnNumber);
        props.boardDecoration(props.btnNumber)
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

  const [board, setBoard] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [modalVisible, setModalVisible] = useState(false);
  const [player, setPlayer] = useState(true)
  const changePlayer = () => {
    setPlayer(!player)
  }

  const win=()=>{

    // tiles
    if(board[0][0]!=="" && board[0][1]!=="" && board[0][0] === board[0][1] && board[0][1] === board[0][2]){
      console.log(player? "Player1 Wins": "Player2 Wins");
      setModalVisible(!modalVisible);
    }
    else if(board[1][0]!=="" && board[1][1]!=="" && board[1][0] === board[1][1] && board[1][1] === board[1][2]){
      console.log(player? "Player1 Wins": "Player2 Wins");
      setModalVisible(!modalVisible);
    }
    else if(board[2][0]!=="" && board[2][1]!=="" && board[2][0] === board[2][1] && board[2][1] === board[2][2]){
      console.log(player? "Player1 Wins": "Player2 Wins");
      setModalVisible(!modalVisible);
    }
    // diagonal
    else if(board[0][0]!=="" && board[1][1]!=="" && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
      console.log(player? "Player1 Wins": "Player2 Wins");
      setModalVisible(!modalVisible);
    }
    else if(board[0][2]!=="" && board[1][1]!=="" && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
      console.log(player? "Player1 Wins": "Player2 Wins");
      setModalVisible(!modalVisible);
    }
    // vertical 
    else if(board[0][0]!=="" && board[1][0]!=="" && board[0][0] === board[1][0] && board[1][0] === board[2][0]){
      console.log(player? "Player1 Wins": "Player2 Wins");
      setModalVisible(!modalVisible);
    }
    else if(board[0][1]!=="" && board[1][1]!=="" && board[0][1] === board[1][1] && board[1][1] === board[2][1]){
      console.log(player? "Player1 Wins": "Player2 Wins");
      setModalVisible(!modalVisible);
    }
    else if(board[0][2]!=="" && board[1][2]!=="" && board[0][2] === board[1][2] && board[1][2] === board[2][2]){
      console.log(player? "Player1 Wins": "Player2 Wins");
      setModalVisible(!modalVisible);
    }
   
  }

  const boardDecoration = (val) => {
    if (val == 1) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        first_row[0] = "X"
        setBoard([first_row, second_row, third_row]);
      }
      else {
        first_row[0] = "0"

        setBoard([first_row, second_row, third_row])
      }
    }
    else if (val == 2) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        first_row[1] = "X"
        setBoard([first_row, second_row, third_row])
      }
      else {
        first_row[1] = "0"

        setBoard([first_row, second_row, third_row])
      }

    }
    else if (val == 3) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        first_row[2] = "X"
        setBoard([first_row, second_row, third_row])
      }
      else {
        first_row[2] = "0"

        setBoard([first_row, second_row, third_row])
      }

    }
    else if (val == 4) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        second_row[0] = "X"
        setBoard([first_row, second_row, third_row])
      }
      else {
        second_row[0] = "0"

        setBoard([first_row, second_row, third_row])
      }

    }
    else if (val == 5) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        second_row[1] = "X"
        setBoard([first_row, second_row, third_row])
      }
      else {
        second_row[1] = "0"

        setBoard([first_row, second_row, third_row])
      }

    }
    else if (val == 6) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        second_row[2] = "X"
        setBoard([first_row, second_row, third_row])
      }
      else {
        second_row[2] = "0"

        setBoard([first_row, second_row, third_row])
      }

    }
    else if (val == 7) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        third_row[0] = "X"
        setBoard([first_row, second_row, third_row])
      }
      else {
        third_row[0] = "0"

        setBoard([first_row, second_row, third_row])
      }

    }
    else if (val == 8) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        third_row[1] = "X"
        setBoard([first_row, second_row, third_row])
      }
      else {
        third_row[1] = "0"

        setBoard([first_row, second_row, third_row])
      }

    }
    else if (val == 9) {
      const first_row = board[0]
      const second_row = board[1]
      const third_row = board[2]
      if (player) {
        third_row[2] = "X"
        setBoard([first_row, second_row, third_row])
      }
      else {
        third_row[2] = "0"

        setBoard([first_row, second_row, third_row])
      }
    }
    win();
  }
   const startAgain=async()=>{
    setModalVisible(!modalVisible)
    setBoard([["", "", ""], ["", "", ""], ["", "", ""]]);
    await Updates.reloadAsync();
  }
  return (
    <View style={styles.container}>
      <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {modalVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
              <Text style = {styles.text}>{player?"Player2 Wins": "Player1 Wins"}</Text>  
              <Button title="Click To Start Again" onPress = {startAgain}/>  
          </View>  
        </Modal>  
      <Text>Player 2: 0</Text>
      {/* first line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={1} />
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={2} />
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={3} />
      </View>
      {/* second line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={4} />
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={5} />
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={6} />
      </View>

      {/* third line */}
      <View style={styles.line}>
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={7} />
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={8} />
        <BB changePlayer={changePlayer} player={player} boardDecoration={boardDecoration} btnNumber={9} />
      </View>
      <Text>Player 1: X</Text>
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
  modal: {  
  justifyContent: 'center',  
  alignItems: 'center',   
  backgroundColor : "#00BCD4",   
  height: 300 ,  
  width: '80%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: '#fff',    
  marginTop: 80,  
  marginLeft: 40,  
  },  
  text: {  
    color: '#3f2949',  
    marginTop: 10  
  } 
});