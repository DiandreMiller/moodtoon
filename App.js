import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectAColor from './Components/SelectAColor';
import NavBar from './Components/NavBar';
import OfficialLogo from './Components/OfficialLogo';

//Screens
import Home from './Screens/Home';
import ColorMeanings from './Screens/ColorMeanings';

//Components:
// import RainbowBottomBorder from './Components/RainbowBottomBorder'



const Stack = createStackNavigator();

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('white'); 

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    
    <NavigationContainer>
      <OfficialLogo />
      {/* <RainbowBottomBorder /> */}
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorMeanings" component={ColorMeanings} />
      </Stack.Navigator>
      <View style={[styles.container, { backgroundColor }]}>
        <SelectAColor onColorChange={handleColorChange} />
        <NavBar />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute', 
    top: 10, 
    left: -20, 
    
  },
});
