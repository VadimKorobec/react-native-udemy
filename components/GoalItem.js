import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <Pressable onPress={()=> onDelete(item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
