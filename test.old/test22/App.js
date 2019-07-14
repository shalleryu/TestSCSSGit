import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
// import TabBarIcon from './components/TabBarIcon';
// import * as WebBrowser from "expo-web-browser";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TabBarIcon /> */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* <Image source={require('./assets/splash.png')} /> */}
      {/* <Button title="Open a web browser" onPress={() => {
        WebBrowser.openBrowserAsync('https://expo.io');
      }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
