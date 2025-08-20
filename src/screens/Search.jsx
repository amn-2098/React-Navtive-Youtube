import { Button, StyleSheet, Text, View } from "react-native";

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 10 }}>
        Search Page
      </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")} // Navigate to Home
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 60,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
});
