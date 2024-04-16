import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as RootNavigation from './RootNavigation'


import colorPicker from '../assets/color-picker.png';
import genreImage from '../assets/genre-image.png';
import corazon from '../assets/corazon.png';
import infinityColor from '../assets/infinity-color.png';

import ColorMeanings from "../Screens/ColorMeanings";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10, 
        backgroundColor: 'white',
    },
    imageContainer: {
        alignItems: 'center',
        marginRight: 30, 
        paddingLeft: 25,
    },
    text: {
        marginBottom: 10,
    },
    image: {
        width: 30,
        height: 30
    }
});

const NavBar = () => {
    const navigation = useNavigation();

    console.log('navigation:', navigation);
  
    const handleImageClick = (image) => {
        console.log(`Clicked on image: ${image}`);
        if (image === 'infinityColor') {
            console.log('Navigating to ColorMeanings screen');
            navigation.navigate('ColorMeanings');
        }
    };

    console.log('NavBar component rendered');

    return (
        <View style={[styles.container, { backgroundColor: 'white' }]}>
            <TouchableOpacity style={styles.imageContainer} onPress={() => handleImageClick('colorPicker')}>
                <Image source={colorPicker} style={styles.image} />
                <Text style={styles.text}>Moods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={() => handleImageClick('genreImage')}>
                <Image source={genreImage} style={styles.image} />
                <Text style={styles.text}>Genre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={() => handleImageClick('corazon')}>
                <Image source={corazon} style={styles.image} />
                <Text style={styles.text}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={() => handleImageClick('infinityColor')}>
                <Image source={infinityColor} style={styles.image} />
                <Text style={styles.text}>Meaning</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NavBar;

