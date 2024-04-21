import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectAColor from './Screens/SelectAColor';
import NavBar from './Components/NavBar';
import OfficialLogo from './Components/OfficialLogo';

//Screens
import Home from './Screens/Home';
import ColorMeanings from './Screens/ColorMeanings';

const Stack = createStackNavigator();

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('white'); 

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <NavigationContainer>
      <OfficialLogo />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home">
          {props => <Home {...props} backgroundColor={backgroundColor} onColorChange={handleColorChange} />}
        </Stack.Screen>
        <Stack.Screen name="ColorMeanings" component={ColorMeanings} />
        <Stack.Screen
          name='SelectAColor'
          options={({ navigation }) => ({
            headerTitle: 'Select A Color',
            headerRight: () => (
              <Button 
                onPress={() => {
                  navigation.navigate('SelectAColor', { 
                    selectedColor: backgroundColor, 
                    onColorChange: handleColorChange 
                  });
                }}
                title='Apply'
              />
            )
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
  }
});
