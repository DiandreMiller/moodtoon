import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import colorPicker from '../assets/color-picker.png';
import genreImage from '../assets/genre-image.png';
import corazon from '../assets/corazon.png';
import infinityColor from '../assets/infinity-color.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
    },
    imageContainer: {
        alignItems: 'center',
        marginRight: 30, 
        paddingLeft: 25,
    },
    text: {
        marginBottom: 20, 
    },
    image: {
        width: 30,
        height: 30
    }
});

const NavBar = () => {
    const handleImageClick = (image) => {
        console.log(`Clicked on image: ${image}`);
    };

    return (
        <View style={[styles.container , {backgroundColor: 'white'}]}>
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
    )
}

export default NavBar;
