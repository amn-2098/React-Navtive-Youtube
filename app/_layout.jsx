// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   if (!loaded) {
//     // Async font loading only occurs in development.
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }


// import React from "react";
// import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

// const { width } = Dimensions.get("window");
// const boxSize = width * 0.25;

// const App = () => {
//   return (
//     <ScrollView contentContainerStyle ={{gap:1}} style={styles.container} horizontal>
//       <View style={[styles.box, { backgroundColor: "green" }]} />
//       <View style={[styles.box, { backgroundColor: "red" }]} />
//       <View style={[styles.box, { backgroundColor: "yellow" }]} />
//       <View style={[styles.box, { backgroundColor: "green" }]} />
//       <View style={[styles.box, { backgroundColor: "red" }]} />
//       <View style={[styles.box, { backgroundColor: "yellow" }]} />
//       <View style={[styles.box, { backgroundColor: "green" }]} />
//       <View style={[styles.box, { backgroundColor: "red" }]} />
//       <View style={[styles.box, { backgroundColor: "yellow" }]} />
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//     borderRadius:50
//   },
//   box: {
//     width: boxSize,
//     height: boxSize,
//     margin: 10,
//     borderRadius: 50,
//   },
// });



// FLATLIST TOPIC

// import { FlatList, Image, StyleSheet, Text, View } from 'react-native'



// const dummy = 
// [
//   { id: 1, name: "John Doe", email: "john@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 2, name: "Alice Smith", email: "alice@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 3, name: "Michael Johnson", email: "michael@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 4, name: "Emma Brown", email: "emma@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 5, name: "David Wilson", email: "david@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 6, name: "Sophia Davis", email: "sophia@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 7, name: "James Miller", email: "james@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 8, name: "Olivia Taylor", email: "olivia@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 9, name: "William Anderson", email: "william@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },
  
//   { id: 10, name: "Isabella Thomas", email: "isabella@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },
//    { id: 11, name: "John Doe", email: "john@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 12, name: "Alice Smith", email: "alice@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 13, name: "Michael Johnson", email: "michael@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id:14, name: "Emma Brown", email: "emma@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 15, name: "David Wilson", email: "david@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 16, name: "Sophia Davis", email: "sophia@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 17, name: "James Miller", email: "james@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 18, name: "Olivia Taylor", email: "olivia@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },

//   { id: 19, name: "William Anderson", email: "william@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" },
  
//   { id: 20, name: "Isabella Thomas", email: "isabella@mail.com", image: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" }
// ]

// const App = () => {
//   return (
//     <View style={styles.container}>

//       <FlatList 
//         data = {dummy}
//         renderItem ={({item}) => (
//             <View style={styles.card}>
//         <Image
//           style={{width:40 , height:40, borderRadius:20, marginRight:12}}
//           source={{ uri: "https://images.unsplash.com/photo-1755127761414-c4f552bb3549?w=700&auto=format&fit=crop&q=60" }}
//         />
//         <Text>E-Mail</Text>
//         <Text>Name</Text>
//     </View> 
//         )}

//         keyExtractor={item => item.id}//used to uniquely identify item
//         ItemSeparatorComponent={<View style={{height:10}} />}  //gapping between items
//         numColumns={2}//divide items in column of 2
//         columnWrapperStyle= {{gap:10}}
//         />
  
//   </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     width: "100%",
//     height: "100%",
//     backgroundColor: '#dadada',
//     paddingVertical: 60,
//     paddingHorizontal:20,
   
//   },
//   card: {
//    width:100,
//    height:100,
//    backgroundColor:"white",
//    borderRadius:10,
//    padding:5,
//    alignItems:"center",
//    justifyContent:"center"
//   },
 
// })




// USERINPUT TOPIC


// import React, { useState } from 'react'
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

// const App = () => {
//   // state to store current input
//   const [text, setText] = useState('')
//   // state to store submitted value
//   const [submittedText, setSubmittedText] = useState('')

//   // function runs when button is pressed
//   const handleSubmit = () => {
//     setSubmittedText(text) // save input
//     setText('')            // clear input field
//   }

//   return (
//     <View style={styles.container}>
//       {/* heading */}
//       <Text style={styles.title}>User Input</Text>

//       {/* text input field */}
//       <TextInput
//         placeholder="Enter your name...."
//         style={styles.input}
//         value={text}           // controlled input
//         onChangeText={setText} // update state on typing
//         multiliner
//       />

//       {/* submit button */}
//       <Button title="Submit" onPress={handleSubmit} />

//       {/* show result only if submitted */}
//       {submittedText ? <Text>Result: {submittedText}</Text> : null}
//     </View>
//   )
// }

// export default App

// // styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,               // take full screen
//     alignItems: 'center',  // center horizontally
//     justifyContent: 'center', // center vertically
//     padding: 20,
//     gap: 10,               // space between children
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   input: {
//     width: '100%',          // full width
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
// })


// NAVIGATION



// import { Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../src/screens/Home";
// import Profile from "../src/screens/Profile";
// import Search from "../src/screens/Search";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();



// STACK NAVIGATION

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home"
//     screenOptions={{
//       headerStyle: { backgroundColor: "#bcbcbcff" }, // Set default header style globally on all screens
      
//     }
//   }
//     >
//       <Stack.Screen 
//         name="Profile" 
//         component={Profile} 
//         options={{title: "Profile Screen", headerStyle:{backgroundColor:"green"}}} // Set title for Profile screen
//       />

//       <Stack.Screen 
//         name="Home" 
//         component={Home}
//         options={{ headerShown: false }} // Hide header for Home
//        />

//       <Stack.Screen
//         name="Search"
//         component={Search}
//        />
//     </Stack.Navigator>
//   );
// };



// TABS NAVIGATION


// const TabNavigation = () => {
//   return (
    
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//         headerStyle: { backgroundColor: "#2570b6ff" },
//         tabBarActiveTintColor: "skyblue",
//         tabBarInactiveTintColor: "gray",
//         tabBarLabelStyle: { fontSize: 14 }, // label size
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === "Home") iconName = "home";
//           else if (route.name === "Profile") iconName = "person";
//           else if (route.name === "Search") iconName = "search";

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       >
//         <Tab.Screen 
//           name="Home" 
//           component={Home}
//           options={{ headerShown: false,tabBarActiveTintColor:"red",}} // Hide header for Home
//         />
//         <Tab.Screen
//           name="Profile" 
//           component={Profile}
//         />
//         <Tab.Screen 
//           name="Search" 
//           component={Search} 
//         />
//       </Tab.Navigator>
    
//   );
// };

// const App = () => {
//   return (
//     <TabNavigation />
//     // <StackNavigator />
//   );
// };

// export default App;




{/* <PROJECT></PROJECT> */}



import React from 'react'
import { StyleSheet, View } from 'react-native'
import HomeScreen from '../src/projectPracticeScreens/HomeScreen'

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  )
}

export default App
const styles = StyleSheet.create({})


