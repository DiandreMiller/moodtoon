import React from 'react';
import { View, Button } from 'react-native';

const Home = ({ navigation, backgroundColor }) => {
    return (
        <View style={{ backgroundColor: backgroundColor, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Test Button" onPress={() => navigation.navigate('ColorMeanings')} />
        </View>
    );
};

export default Home;
