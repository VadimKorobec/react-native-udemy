import { useState } from "react";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, onToggle }) => {
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

    onAddGoal(goal);

    reset();
  };

  const reset = () => {
    setText("");
  };
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={handleInput}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContaiter}>
          <View style={styles.button}>
            <Button onPress={handleAddGoal} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onToggle} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding:16,
    gap: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#cccccc",
    width: "100%",
    padding: 10,
  },
  buttonContaiter: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: 120,
  },
});
