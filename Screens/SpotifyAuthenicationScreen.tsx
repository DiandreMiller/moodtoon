import {Button, Linking, View} from 'react-native'
import NeonPlayButton from '../Components/NeonPlayButton';


const SpotifyAuthenicationScreen = () => {

    const cliId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    // const clientId = require('react-native-dotenv').REACT_APP_SPOTIFY_CLIENT_ID;
    const CLIENT_ID = '49647a0c3e514f3fa2fee76ef1d3282f'
    const REDIRECT_URI = 'spotify-ios-quick-start://spotify-login-callback';
    // const SCOPE = 'user-read-private user-read-email';
    // const SCOPE = 'streaming';
    // const SCOPE = 'app-remote-control';
    const SCOPE = 'playlist-read-collaborative'

    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
   
    const handleSpotifyAuthentication = () => {
        Linking.openURL(AUTH_URL);
        console.log('client-id:', CLIENT_ID)
        console.log('Spotifiy Authenthication clicked' );
        console.log('env:', process.env);
        console.log('clId',cliId);
        console.log('scope:', SCOPE);
    }

    return (
        <View>
             <Button title='Login To Spotify' onPress={handleSpotifyAuthentication}/>
             <NeonPlayButton />
        </View>
       
    )
    
}

export default SpotifyAuthenicationScreen;