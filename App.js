import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="GoTo Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="GoTo Details Screen... again?"
        onPress={() => navigation.push('Details')}
      />
      <Button title="GoTo Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back?" onPress={() => navigation.goBack()} />
      <Button
        title="Go to the first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          title: 'Details Overview'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
