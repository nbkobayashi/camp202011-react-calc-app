import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable
} from "react-native";

export default function App() {
  const [leftNum, setLeftNum] = React.useState("");
  const [rightNum, setRightNum] = React.useState("");
  const [result, setResult] = React.useState(0);

  const calcAdd = () => {
    const result = Number(leftNum) + Number(rightNum);
    setResult(result);
    clearInput();
  };

  const calcSub = () => {
    const result = Number(leftNum) - Number(rightNum);
    setResult(result);
    clearInput();
  };

  const calcMul = () => {
    const result = Number(leftNum) * Number(rightNum);
    setResult(result);
    clearInput();
  };

  const calcDiv = () => {
    const result = Number(leftNum) / Number(rightNum);
    setResult(result);
    clearInput();
  };

  const clearInput = () => {
    setLeftNum("");
    setRightNum("");
  };

  const clearAll = () => {
    setResult(0);
    clearInput();
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.resultText}>{result}</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputText}
            onChangeText={text => setLeftNum(text)}
            value={leftNum}
            placeholder="0"
          />
          <TextInput
            style={styles.inputText}
            onChangeText={text => setRightNum(text)}
            value={rightNum}
            placeholder="0"
          />
        </View>
        <View style={styles.buttons}>
          <Button title=" + " onPress={calcAdd} />
          <Button title=" - " onPress={calcSub} />
          <Pressable>
            <Text style={styles.buttonText} onPress={clearAll}>
              C
            </Text>
          </Pressable>
          <Button title=" × " onPress={calcMul} />
          <Button title=" ÷ " onPress={calcDiv} />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "center"
  },
  resultText: {
    textAlign: "right",
    padding: 10,
    fontSize: 30,
    marginBottom: 20
  },
  inputs: {
    flexDirection: "row",
    marginBottom: 20
  },
  inputText: {
    textAlign: "right",
    padding: 10,
    fontSize: 30,
    backgroundColor: "lightgray",
    color: "#000",
    width: "45%"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    backgroundColor: "blue",
    width: 40,
    height: 40,
    lineHeight: 40
  }
});
