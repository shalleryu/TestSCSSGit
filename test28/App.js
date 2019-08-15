import React, { Component } from 'react';
import { Button, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import WeatherScreen from './screens/Weather';
import TimeTrackingScreen from './screens/TimeTracking';
import ImageFeedScreen from './screens/ImageFeed';
import ContactListNavigator from './routes/contactlist';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {

  static menu = [
    { title: 'weather', route: 'Weather' },
    { title: 'time-tracking', route: 'TimeTracking' },
    { title: 'image-feed', route: 'ImageFeed' },
    { title: 'contact-list', route: 'ContactList' },
  ];

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <FlatList data={HomeScreen.menu} renderItem={({ item }) => <Button
          title={item.title}
          onPress={this.doNavigate(item.route)}
        />} />
      </View>
    );

  }

  doNavigate = (screen) => {
    return () => this.props.navigation.navigate(screen);
  }

}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Weather: WeatherScreen,
  TimeTracking: TimeTrackingScreen,
  ImageFeed: ImageFeedScreen,
  ContactList: ContactListNavigator
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default createAppContainer(AppNavigator);