import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList} from 'react-native';

export default function App() {

  const [shoppingListItem, setShoppingListItem] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  const addItemToShoppingList = () => {
    let newItem = shoppingListItem;
    setShoppingList([...shoppingList, newItem ])
    setShoppingListItem("")
  }

  const clearShoppingList = () => {
    setShoppingList([]);
  }
  // console.log("render")

  return (
    <>
      <View style={styles.containerHeader}>
        <Text style={styles.assignmentHeaderText}>TEHT 4 OSTOSLISTA</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={setShoppingListItem} value={shoppingListItem}/>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Button color="green" onPress={() => addItemToShoppingList()} title="Add" />
          </View>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Button color="red" onPress={() => clearShoppingList()} title="Clear" />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Text style={{color:"#6495ED", fontSize:24}}>SHOPPING LIST</Text>
        <FlatList 
          style={styles.list}
          data={shoppingList}
          renderItem={({ item }) => <Text style={{color:"white"}}>{item}</Text>}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'black',
  },
  containerHeader: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    // color:"white",
    // justifyContent: 'start',
  },
  input : {
    width:"80%", 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
    color:"white",
  },
  assignmentHeaderText: {
    fontSize: 40,
    color:"#6495ED",
  }
});
 
