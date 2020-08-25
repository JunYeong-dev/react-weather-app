import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text style={styles.text}>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // 일반적인 css라면 container가 부모 속성이기 때문에 
    // color에 따라 글자 색이 바뀌겠지만 '리액트 네이티브'이기 때문에 적용이 되지 않음
    color: "white"
  },
  text: {
    color: "black",
    fontSize: 100
  }
});
