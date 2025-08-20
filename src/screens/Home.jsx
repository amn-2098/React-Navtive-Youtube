import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 10 }}>
        Home
      </Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile",{id : 1, name: "John Doe"})} // Navigate to Profile with params
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 60,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dadada",
  },
});
