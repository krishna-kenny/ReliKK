import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const log = false;

  const handleLogin = () => {
    if (email === '' && password === '') {
      log = true;
    } else {
      console.log('[KK] wrong credentials')
    }
  };

  return (
    <View>
      <Text>Login Page</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;