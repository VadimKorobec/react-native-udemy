import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInput = (text) => {
    if (!text.trim()) {
      return Alert.alert("Please enter a valid value!");
    }
    setText(text);
  };

  const handleAddGoal = (goal) => {
    setGoals((prevState) => [...prevState, goal]);
    reset();
  };

  const reset = () => {
    setText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={handleInput}
          placeholder="Your course goal!"
        />
        <Button onPress={() => handleAddGoal(text)} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
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
  goalsContainer: {
    flex: 5,
  },
});
