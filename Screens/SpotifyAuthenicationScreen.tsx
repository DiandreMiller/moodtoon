import {Button, Linking} from 'react-native'

const SpotifyAuthenicationScreen = () => {

    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = 'spotify-ios-quick-start://spotify-login-callback';
    const SCOPE = 'user-read-private user-read-email';

    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

    const handleSpotifyAuthentication = () => {
        Linking.openURL(AUTH_URL);
    }

    return (
        <Button title='Login To Spotify' onPress={handleSpotifyAuthentication}/>
    )
    
}

export default SpotifyAuthenicationScreen;