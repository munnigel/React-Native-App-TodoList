import React from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'
import { useState } from 'react'

function GoalInput(props) {

  const [input, setInput] = useState(''); // input is the STRING of the input field, setInput is the function to update the value of the input field

  function inputHandler(enteredText) {
    setInput(enteredText);
  }

  function addGoal() {
    props.onAddGoal(input);
    setInput(''); //empty the string after adding the goal
  }

  return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer} >
            <Image style={styles.image} source={require('../assets/goal.png')}/>
            <View style={styles.textInputWrapper}>
            <TextInput multiline={true} placeholder='Your course goal!' onChangeText={inputHandler} value={input}></TextInput> 
            {/* inputHandler does not have () as you would not want the function to be immediately executed as soon as this code is rendered. 
            We only want inputHandler function to be pointed so that the function is called only when theres a change in the input */}
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add goal!" onPress={addGoal} color="#b180f0"/>
                </View>
                <View style={styles.button}> 
                    <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
                </View>
            </View>
  
        </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1, // take up 1 unit all available space
        flexDirection: 'column', // column is the main direction of the layout
        justifyContent: 'center', // align items vertically
        alignItems: 'center', // align items horizontally
        padding: 16,
        backgroundColor: '#311b6b',
      },
    
      textInputWrapper: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 10,
        color: '#120438',
        width: '100%',
        padding: 12,
      },

      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },

      button: {
        width: 100,
        marginHorizontal: 8,
      },

      image: {
        width: 100,
        height: 100,
        margin: 20,
      },
    
})