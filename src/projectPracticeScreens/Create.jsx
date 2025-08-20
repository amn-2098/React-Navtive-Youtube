import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Create = ({ data, setData }) => {
  const [itemName, setItemName] = useState("");
  const [stock, setStock] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);

  const handleAddOrEditItem = () => {
    if (isEdit && currentEditId !== null) {
      // Update existing item
      const updatedData = data.map((item) =>
        item.id === currentEditId
          ? { ...item, name: itemName, stock: stock }
          : item
      );
      setData(updatedData);
      setIsEdit(false);
      setCurrentEditId(null);
    } else {
      // Add new item
      const newDataItem = {
        id: Date.now(),
        name: itemName,
        stock: stock,
      };
      setData([...data, newDataItem]);
    }

    // Reset input fields
    setItemName("");
    setStock("");
  };

  const deleteHandler = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleEditItem = (item) => {
    setIsEdit(true);
    setCurrentEditId(item.id);
    setItemName(item.name);
    setStock(item.stock.toString());
  };

  return (
    <View style={styles.styleContainer}>
      <TextInput
        placeholder="Enter Item Name..."
        style={styles.input}
        value={itemName}
        onChangeText={(item) => setItemName(item)}
      />

      <TextInput
        placeholder="Enter Stock Amount..."
        style={styles.input}
        value={stock}
        onChangeText={(value) => setStock(value)}
        keyboardType="numeric"
      />

      <Pressable style={styles.addButton} onPress={handleAddOrEditItem}>
        <Text style={styles.btnText}>
          {isEdit ? "Update Item" : "Add Item"}
        </Text>
      </Pressable>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.headingText}>All Items In Stock</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                {
                  backgroundColor: item.stock < 10 ? "#fcb3b3ff" : "#caefa9bb",
                },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.stock}</Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Pressable onPress={() => handleEditItem(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>

                <Pressable onPress={() => deleteHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  styleContainer: {
    paddingVertical: "4%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#2a2929ff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#72C37AFF",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  headingText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginVertical: 10,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
