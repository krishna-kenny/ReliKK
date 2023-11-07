import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const App = () => {

  return (
    <View>
      <HomeScreen />
      <LoginScreen />
    </View>
  );
};


export default App;
