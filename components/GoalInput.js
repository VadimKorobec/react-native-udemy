import { useState } from "react";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

import {
  Alert,
  Button,
  Image,
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
    onToggle();
    reset();
  };

  const reset = () => {
    setText("");
  };
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={handleInput}
          placeholder="Your course goal!"
          
        />
        <View style={styles.buttonContaiter}>
          <View style={styles.button}>
            <Button onPress={handleAddGoal} title="Add Goal" color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onToggle} color="#f31282" />
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
    padding: 16,
    gap: 24,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
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
