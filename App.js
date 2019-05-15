import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <Text style={styles.PostTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Lorem ipson it dolot met...
          </Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.PostTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Lorem ipson it dolot met...
          </Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.PostTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Lorem ipson it dolot met...
          </Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.PostTitle}>
            Estudando React Native
          </Text>
          <Text style={styles.postDescription}>
            Lorem ipson it dolot met...
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  PostTitle: {
    fontSize: 18,
    fontWeight: "bold",
    // marginBotton: 5,
  },
  postDescription: {
    color: "#666"
  }
});
