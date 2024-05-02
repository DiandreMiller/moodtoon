import React, { useState } from 'react';
import {  StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectAColor from './Screens/SelectAColor';
import NavBar from './Components/NavBar';
import OfficialLogo from './Components/OfficialLogo';


const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

//Screens
import Home from './Screens/Home';
import ColorMeanings from './Screens/ColorMeanings';
import SpotifyAuthenicationScreen from './Screens/SpotifyAuthenicationScreen';


const Stack = createStackNavigator();

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('white'); 

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <NavigationContainer>
      <OfficialLogo />
      <Stack.Navigator initialRouteName='SpotifyAuthenicationScreen'>
        <Stack.Screen name="Home">
          {props => <Home {...props} backgroundColor={backgroundColor} onColorChange={handleColorChange} />}
        </Stack.Screen>
        
        <Stack.Screen name="SpotifyAuthenicationScreen" component={SpotifyAuthenicationScreen} />
         
        <Stack.Screen name="ColorMeanings" component={ColorMeanings} />
        <Stack.Screen
          name='SelectAColor'
          options={() => ({
            headerTitle: 'Select A Color',
          })}
        >
          {props => (
            <SelectAColor
              {...props}
              backgroundColor={backgroundColor} 
              onColorChange={handleColorChange}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <View style={[styles.navbarContainer, { backgroundColor }]}>
        <NavBar backgroundColor={backgroundColor} />
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
  }
});
