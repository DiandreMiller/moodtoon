import { Text, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    red: {
        color: 'red',
    },
    orange: {
        color: 'orange',
    },
    yellow: {
        color: 'yellow',
    },
    green: {
        color: 'green',
    },
    blue: {
        color: 'blue',
    },
    purple: {
        color: 'purple',
    },
    pink: {
        color: 'pink',
    },
    black: {
        color: 'black',
    },
    white: {
        color: 'white',
    },
    gray: {
        color: 'gray',
    },
    brown: {
        color: 'brown',
    },
    gold: {
        color: 'gold',
    },
    silver: {
        color: 'silver',
    },
});


const ColorMeanings = () => {

    
    return (
        <View>
            <Text style={[styles.text, styles.red]}>
                Red: Passion, Energy, Love, Anger, Excitement.
            </Text>
            <Text style={[styles.text, styles.orange]}>
                Orange: Creativity, Enthusiasm, Warmth, Determination.
            </Text>
            <Text style={[styles.text, styles.yellow]}>
                Yellow: Happiness, Optimism, Energy, Intellect, Caution.
            </Text>
            <Text style={[styles.text, styles.green]}>
                Green: Nature, Growth, Harmony, Renewal, Balance.
            </Text>
            <Text style={[styles.text, styles.blue]}>
                Blue: Calmness, Serenity, Trust, Stability, Intelligence.
            </Text>
            <Text style={[styles.text, styles.purple]}>
                Purple: Royalty, Luxury, Spirituality, Mystery, Ambition.
            </Text>
            <Text style={[styles.text, styles.pink]}>
                Pink: Romance, Sweetness, Nurturing, Sensitivity.
            </Text>
            <Text style={[styles.text, styles.black]}>
                Black: Sophistication, Elegance, Power, Mystery, Sadness (in some contexts).
            </Text>
            <Text style={[styles.text, styles.white]}>
                White: Purity, Innocence, Cleanliness, Simplicity, Peace.
            </Text>
            <Text style={[styles.text, styles.gray]}>
                Gray: Neutrality, Formality, Professionalism, Practicality.
            </Text>
            <Text style={[styles.text, styles.brown]}>
                Brown: Earthiness, Stability, Warmth, Reliability.
            </Text>
            <Text style={[styles.text, styles.gold]}>
                Gold: Wealth, Success, Luxury, Prestige.
            </Text>
            <Text style={[styles.text, styles.silver]}>
                Silver: Modernity, Sleekness, Sophistication, Innovation.
            </Text>
        </View>
    )
}

export default ColorMeanings;
