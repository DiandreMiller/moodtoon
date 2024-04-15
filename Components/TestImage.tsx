import moodtoonLogo from '../assets/moodtoon.png'
import { View, Image } from 'react-native';

const TestImage = () => {
    return (
        <View>
            <Image source={moodtoonLogo} style={{ width: 200, height: 200 }}/>
        </View>
    )
}

export default TestImage;