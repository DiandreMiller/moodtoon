
import { View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Button title="Test Button" onPress={() => navigation.navigate('ColorMeanings')} />
        </View>
    );
};

export default Home;
