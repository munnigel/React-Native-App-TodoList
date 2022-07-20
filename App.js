
import { StyleSheet, View, ScrollView, FlatList, Button } from 'react-native'; //ScrollView loads all items even if it is not rendered on screen, while FlatList loads only the items that are visible on screen
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]); // goals is the ARRAY of goals, setGoals is the function to update the array of goals



  function addGoal(input) {
    setGoals( currentGoals => [...currentGoals, {text: input, key: Math.random().toString()}]); 
    {/* Add new goals into current list of goals. Every item is the goals array is ab object with a "text" property and a "key property" randomly generated */}
    cancelAddGoal();
  }

  function removeGoal(key) {
    setGoals((currentGoals) => {
      console.log(key);
      return currentGoals.filter((goal) => goal.key !== key); //keep the item if the key is not the same as the key that is passed in
    });
  }

  function startAddGoal() {
    setModalIsVisible(true);
  }

  function cancelAddGoal() {
    setModalIsVisible(false);
  }

  return (
    <> 
    {/* <> is to allow StatusBar to be on the same level as the <View> sibling element */}
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.addGoalBtn}>
          <Button title="Add new goal" color="#a065ec" onPress={startAddGoal}  />
        </View>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoal} onCancel={cancelAddGoal} />
        {/* If modalIsVisible is true, render <GoalInput>. onAddGoal variable is passed as props in GoalInput,js */}
        <View style={styles.goalsContainer}>

        {/* <ScrollView>
          {goals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>
                  {goal}
                </Text>
            </View>
              ))}
            // key={goal.key} is to ensure that each goal has a distinct ID for React to manage better
        </ScrollView> */}

        <FlatList data={goals} renderItem={(item) => {
          return <GoalItem text={item.item.text} myKey={item.item.key} onDeleteItem={removeGoal}/> //  item.item.text is the text property, item.item.key is the key property, text variable is passed as props in GoalItem.js
          }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up all the space (as it is the only main parent container)of the screen for the child containers
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 4, // take up 4 units all available space
  },

  addGoalBtn: {
    marginTop: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },


});
