
import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';


export default function ButtonExample() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.fixToText}>
            <Button
                title="up!"
                onPress={() => Alert.alert('上だよ!')}
            />
            <Button
                title="down!"
                onPress={() => Alert.alert('下だよ!')}
            />
            </View>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    fixToText: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  });