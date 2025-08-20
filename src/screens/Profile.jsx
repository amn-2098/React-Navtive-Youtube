import { Button, StyleSheet, Text, View } from "react-native";

const Profile = ({ navigation,route }) => {
  const {id , name} = route.params || {}; // Destructure params with fallback
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 10 }}>
        Profile
      </Text>
      <Text style={styles.text}> id: {id} , Name: {name}</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 60,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dadada",
    gap:10
  },
});
