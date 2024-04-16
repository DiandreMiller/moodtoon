import officialMoodToons from '../assets/moodtoon.png';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        alignItems: 'flex-start', 
        marginTop: 30, 
        marginLeft: -40
    },
    imageContainer: {
        height: 50,
        width: 200,
    }
})

const OfficialLogo = () => {
    return (
        <View style={styles.container}>
            <Image source={officialMoodToons} style={styles.imageContainer} />
        </View>
    )
}

export default OfficialLogo;
