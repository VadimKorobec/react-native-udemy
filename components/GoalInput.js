import { useState } from "react";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({onAdd}) => {
  const [text, setText] = useState("");

  const handleInput = (text) => {
    setText(text);
  };

  const handleAddGoal = () => {
    const enteredText = text.trim();

    const goal = {
      id: nanoid(),
      text: enteredText,
    };

    if (goal.text === "") {
      return Alert.alert("Please enter a valid value!");
    }

    onAdd(goal)
    reset();
  };

  const reset = () => {
    setText("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={handleInput}
        placeholder="Your course goal!"
      />
      <Button onPress={handleAddGoal} title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#cccccc",
    width: "80%",
    padding: 10,
  },
});
