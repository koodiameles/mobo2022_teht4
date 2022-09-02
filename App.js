import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image, Text, FlatList} from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [calculatorHistory, setCalculatorHistory] = useState([]);

  // console.log("render")
  // console.log(calculatorHistory)

  const calculate = (symbol) => {
    if (symbol === "+") {
      let summation = Number(number1) + Number(number2);
      setResult(summation);
      let calculation = `${number1} + ${number2} = ${summation}`;
      setCalculatorHistory([...calculatorHistory, calculation]);
      setNumber1("")
      setNumber2("")
    }
    if (symbol === "-") {
      let deduction = Number(number1) - Number(number2);
      setResult(deduction)
      let calculation = `${number1} - ${number2} = ${deduction}`;
      setCalculatorHistory([...calculatorHistory, calculation]);
      setNumber1("")
      setNumber2("")
    }
  }

  return (
    <>
      <View style={styles.containerHeader}>
        <Text style={styles.assignemtHeaderText}>TEHT 3 LASKIN HISTORIALLA</Text>
      </View>
      <View style={styles.container}>
        <Text style={{color:"white"}}>Result: {result}</Text>
        <TextInput keyboardType="numeric" style={styles.input} onChangeText={setNumber1} value={number1}/>
        <TextInput keyboardType="numeric" style={styles.input} onChangeText={setNumber2} value={number2}/>
        <View style={{display: 'flex', flexDirection: 'row', margin: 10}}>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Button color="green" onPress={() => calculate("+")} title="+" />
          </View>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Button color="red" onPress={() => calculate("-")} title="-" />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <Text style={{color:"white"}}>HISTORY</Text>
        <FlatList 
          style={styles.list}
          data={calculatorHistory}
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
  image : {
    width: 250,
    height: 100
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
    color:"white",
  },
  assignemtHeaderText: {
    fontSize: 40,
    color: "white"
  }
});
 
