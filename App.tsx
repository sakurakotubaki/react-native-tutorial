import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi icchysan!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // Viewに適用するスタイル
  container: {
    flex: 1,
    backgroundColor: "#bacbe8",
    alignItems: "center",
    justifyContent: "center",
  },
  // Textに適用するスタイル
  text: {
    color: "red",
    fontSize: 20,
    fontFamily: "Arial",
  },
});