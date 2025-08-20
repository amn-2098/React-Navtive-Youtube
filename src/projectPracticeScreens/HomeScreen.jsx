import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AllItems from "./AllItems";
import Create from "./Create";





const HomeScreen = () => {
    const [view, setView] = useState(0)
    const [data, setData] = useState([
  { id: 1, name: "Wheat", stock: 10, unit: "kg" },
  { id: 2, name: "Rice", stock: 5, unit: "kg" },
  { id: 3, name: "Sugar", stock: 8, unit: "kg" },
  { id: 4, name: "Milk", stock: 20, unit: "litre" },
  { id: 5, name: "Salt", stock: 15, unit: "kg" },
])

  return (
    <View style ={styles.container }>
      <Text style={styles.title}>Dashboard</Text>
      <View style= {styles.buttonContainer}>
        <Pressable style={[styles.button , view === 0 ? {backgroundColor:"#72C37AFF"} : null ] } onPress={() => setView(0)}>
            <Text style={[styles.btnText, view === 0 ? {color :"white"}: null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button , view === 1 ? {backgroundColor:"#72C37AFF"} : null ] } onPress={() => setView(1)}>
            <Text style={[styles.btnText, view === 1 ? {color :"white"}: null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button , view === 2 ? {backgroundColor:"#72C37AFF"} : null ] } onPress={() => setView(2)}>
            <Text style={[styles.btnText, view === 2 ? {color :"white"}: null]}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems  data = {data}/>}
      {view === 1 && <AllItems data = {data.filter((item)=>item.stock<10)} />}
      {view === 2 && <Create data = {data} setData={setData}/>}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        wisth: '100%',
        height: '100%',
        backgroundColor:'#dedcdcff',
        padding:"9%",
        paddingHorizontal: "5%",
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    buttonContainer:{
        flexDirection: 'row',
        gap:10,
        marginVertical: 10,
    },
    button: {
        borderWidth:0.8,
        padding: 10,
        borderRadius: 50,
        borderColor:"#72C37AFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    btnText: {
        fontSize: 14,
        color: 'green',
        fontWeight: '400',
    },
})