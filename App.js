import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import SelectAColor from './Components/SelectAColor';
import TestImage from './Components/TestImage';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('white'); 

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <SelectAColor onColorChange={handleColorChange} />
      <TestImage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
