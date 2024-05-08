import { View, Image, StyleSheet, Dimensions } from "react-native";
import rainbowBorder from '../assets/rainbow-border.jpg';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    rainbowStyle: {
        width: windowWidth * 0.33,
        height: 1.5,
        top: 40
    }
});

const NeonPlayButton = () => {
    return (
        <View style={styles.container}>
            <Image source={rainbowBorder} style={styles.rainbowStyle} />
        </View>
    )
}

export default NeonPlayButton;
