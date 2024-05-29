import { useState } from "react";
import axios from "axios";
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from "react-native";

const RAPID_API_KEY = process.env.REACT_APP_RAPIDAPI_KEY1;
const RAPID_API_HOST = 'youtube-music-api-yt.p.rapidapi.com';
const BASEURL = `https://youtube-music-api-yt.p.rapidapi.com/`;

const SongLyrics2 = () => {
  const [id, setId] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [lyrics, setLyrics] = useState<string[]>([]);
  const [lyricsError, setLyricsError] = useState<string>('');
  const [searchError, setSearchError] = useState<string>('');

  const getTrackLyrics = async () => {
    try {
      if (!id) {
        throw new Error('Track ID is missing');
      }
      const response = await axios.get(`${BASEURL}get-lyrics?videoId=${id}`, {
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': RAPID_API_HOST
        }
      });
      setLyrics(response.data.lyrics);
    } catch (error) {
      console.error('Error fetching track lyrics:', error);
      setLyricsError('Oops, something bad happened while fetching lyrics');
    }
  };

  const getSearch = async (query: string): Promise<string | undefined> => {
    try {
      const response = await axios.get(`${BASEURL}search?query=${query}`, {
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': RAPID_API_HOST
        }
      });

      if (Array.isArray(response.data)) {
        const track = response.data.find((searchResult: any) => searchResult.name.toLowerCase() === query.toLowerCase().trim());
        if (track) {
          setId(track.videoId);
          return track.videoId;
        }
      } else {
        console.error('Unexpected response format or no tracks found:', response.data);
      }
      return undefined;
    } catch (error) {
      console.log('Error fetching search results:', error);
      setSearchError('There was an error searching for the song');
      throw error;
    }
  };

  const handleSearch = async () => {
    setLyricsError('');
    setSearchError('');

    const trackId = await getSearch(search);

    if (trackId) {
      await getTrackLyrics();
    } else {
      setLyricsError('No track found with that name');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter track name"
        value={search}
        onChangeText={setSearch}
      />
      <Button title="Search" onPress={handleSearch} />
      {searchError ? <Text style={styles.error}>{searchError}</Text> : null}
      {lyricsError ? <Text style={styles.error}>{lyricsError}</Text> : null}
      {lyrics.length > 0 ? (
        <ScrollView style={styles.lyricsContainer}>
          <Text style={styles.lyrics}>{lyrics.join("\n")}</Text>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  lyricsContainer: {
    marginTop: 20,
    maxHeight: 300,
  },
  lyrics: {
    fontSize: 16,
    color: "black",
  },
  error: {
    marginTop: 20,
    fontSize: 16,
    color: "red",
  },
});

export default SongLyrics2;

