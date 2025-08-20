import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, FlatList } from "react-native";

// Define a Task type
type Task = {
  id: string;
  text: string;
};

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]); // 👈 now TS knows the array holds Task objects

  const addTask = () => {
    if (task.trim().length === 0) return;
    setTasks([...tasks, { id: Date.now().toString(), text: task }]); // ✅ works now
    setTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TO DO App ✅</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={task}
        onChangeText={setTask}
      />

      <View style={styles.buttonWrapper}>
        <Button title="Add Task" onPress={addTask} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.task}>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  buttonWrapper: {
    marginBottom: 20,
  },
  task: {
    fontSize: 18,
    padding: 12,
    backgroundColor: "#f0f0f0",
    marginBottom: 8,
    borderRadius: 8,
  },
});
