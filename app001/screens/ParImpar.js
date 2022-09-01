import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";

export const ParImpar = () => {
  const [text, onChangeText] = React.useState("0");
  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <Text style={styles.title}>Digite um número inteiro: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="numeric"
        />
      </View>
      {text % 2 == 1 && <ActivityIndicator size="large" />}
      {text % 2 == 0 && (
        <View style={styles.barraStatus}>
          <Text style={styles.textoStatus}>Este número é PAR</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: "blue",
    fontSize: 20,
  },
  view: {
    width: 300,
    height: 300,
    backgroundColor: "yellow",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    fontSize: 30,
    padding: 10,
  },
  viewInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  barraStatus: {
    width: "100%",
    height: 40,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  textoStatus: {
    fontSize: 17,
  },
});
