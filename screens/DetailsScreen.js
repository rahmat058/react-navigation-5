import React from 'react';
import {View, Button, Text} from 'react-native';

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

export default DetailsScreen;
