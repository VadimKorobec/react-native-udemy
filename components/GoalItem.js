import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDelete(item.id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin:6,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
  },
});
