import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have pushed the button this many times:</Text>
      <Text style={styles.counter}>{counter}</Text>
      <Button title="Increment" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  counter: {
    fontSize: 48,
    margin: 20,
  },
});

export default App;