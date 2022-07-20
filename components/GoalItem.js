import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
    function onPressHandler() {
        props.onDeleteItem(props.myKey);
    }

  return (

    <View style={styles.goalItem}>
        <Pressable android_ripple={{color: '#210644'}}onPress={onPressHandler} style={({ pressed }) => pressed && styles.pressedItem}>
            <Text style={styles.goalText}>
                {props.text} {/* we call props.text here as the function in Main is called text, i.e we use text={item.item.text}*/}
            </Text>
        </Pressable>
    </View>

  )
{/* renderItem in App.js is called whenever a new item is rendered, hence we do not need to map everything out unlike the function above item is an object whereby 
it has metadata such as .index value and .item property for each item being rendered. Technically .index value already gives each <Text> a unique key*/}
}

export default GoalItem;

const styles = StyleSheet.create({ 
    goalItem: {
        margin: 12,
        marginTop: 20,
        marginBottom: 1,
        borderRadius: 6,
        backgroundColor: '#5e08cc',


      },

      pressedItem : {
        opacity: 0.5,
        },
    
      goalText: {
        color: '#fff',
        padding: 8,
      }

});

// android_ripple effect is for android, style={({ pressed }) => pressed && styles.pressedItem} is for iphone