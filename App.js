import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisable, setModalIsVisable] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (data) => {
    setGoals((prevState) => [...prevState, data]);
  };

  const handleDeleteGoal = (id) => {
    const newState = goals.filter((item) => item.id !== id);
    setGoals(newState);
  };

  const handleToggleModal = () => {
    setModalIsVisable((prevState) => !prevState);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleToggleModal}
          title="Add New Goal"
          color="#5e0acc"
        />
      </View>
      <GoalInput
        onToggle={handleToggleModal}
        visible={modalIsVisable}
        onAddGoal={handleAddGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem onDelete={handleDeleteGoal} item={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  buttonContainer: {
    borderRadius: 6,
    overflow: "hidden",
  },
});
