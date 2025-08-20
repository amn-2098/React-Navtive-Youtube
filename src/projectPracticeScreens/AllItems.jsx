import { FlatList, StyleSheet, Text, View } from 'react-native'


const AllItems = ({data}) => {
  return (
    <View>
     <View style={styles.headingContainer}>
      <Text style={styles.headingText}>Items</Text>
      <Text style={styles.headingText}>Quantity</Text>
     </View>

     <FlatList
     data= {data}
     keyExtractor={(item) => item.id}
     renderItem={({item}) => (
 <View style={[
  styles.itemContainer,
  { backgroundColor: item.stock < 10 ? '#fcb3b3ff' : '#caefa9bb' }
]}>


          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemText}>{item.stock} {item.unit}</Text>
        </View>
      )}

      contentContainerStyle={{ gap:10 }}
     />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
  headingContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  itemText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
  }
})