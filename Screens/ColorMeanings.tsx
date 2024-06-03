import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
// import SongLyrics from '../Components/SongLyrics';
// import SongLyrics2 from '../Components/SongLyrics2';

const colorNames = {
    Red: 'red',
    Orange: 'orange',
    Yellow: 'yellow',
    Green: 'green',
    Blue: 'blue',
    Purple: 'purple',
    Pink: 'pink',
    Black: 'black',
    White: 'white',
    Gray: 'gray',
    Brown: 'brown',
    Gold: 'gold',
    Silver: 'silver',
};

const ColorMeanings = () => {

    const renderColorText = (colorName, meanings) => {
        const colorStyle = { backgroundColor: colorNames[colorName], width: 18, height: 18, borderRadius: 10, marginRight: 5, marginTop: -45 };
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 50 }}>
                <View style={colorStyle}></View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.colorName}>{colorName}:</Text>
                    <Text style={styles.meanings}>{meanings}</Text>
                </View>
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            {renderColorText('Red', 'Passion, Energy, Love, Anger, Excitement.')}
            {renderColorText('Orange', 'Creativity, Enthusiasm, Warmth, Determination.')}
            {renderColorText('Yellow', 'Happiness, Optimism, Energy, Intellect, Caution.')}
            {renderColorText('Green', 'Nature, Growth, Harmony, Renewal, Balance.')}
            {renderColorText('Blue', 'Calmness, Serenity, Trust, Stability, Intelligence.')}
            {renderColorText('Purple', 'Royalty, Luxury, Spirituality, Mystery, Ambition.')}
            {renderColorText('Pink', 'Romance, Sweetness, Nurturing, Sensitivity.')}
            {renderColorText('Black', 'Sophistication, Elegance, Power, Mystery.')}
            {renderColorText('White', 'Purity, Innocence, Cleanliness, Simplicity, Peace.')}
            {renderColorText('Gray', 'Sadness, Gloominess, Despondent, Regret.')}
            {renderColorText('Brown', 'Earthiness, Stability, Warmth, Reliability.')}
            {renderColorText('Gold', 'Wealth, Success, Luxury, Prestige, Affluence.')}
            {renderColorText('Silver', 'Modernity, Sleekness, Sophistication, Innovation.')}
            {/* <SongLyrics2 /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 100, 
    },
    colorName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    meanings: {
        fontSize: 18,
        color: 'black',
    },
});

export default ColorMeanings;
