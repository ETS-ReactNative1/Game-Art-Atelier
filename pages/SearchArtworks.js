import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';
import {TWITCH_CLIENT_ID, TWITCH_APP_ACCESS_TOKEN} from '@env';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function SearchArtworks ( { navigation } ) {

  const [searchWord, setSearchWord] = useState('');
  const [artworks, setArtworks] = useState([]);
  const [favartworks, setFavArtworks] = useState([]);

  const favartworksDb = SQLite.openDatabase('favartworks.db');

  useEffect(() => {
    favartworksDb.transaction(tx => {
      tx.executeSql('create table if not exists favartworks (id integer primary key not null, name text, imageid text);');
    }, null, updateList);
  }, []);


  const saveItem = (id, name, imageid) => {
    favartworksDb.transaction(tx => {
      tx.executeSql('insert into favartworks (name, imageid) values (?, ?);', 
      [name, imageid]);
    }, null, updateList);
    Alert.alert('Save Successful', name + " has been saved successfully.");
  }

  const updateList = () => {
    favartworksDb.transaction(tx => {
      tx.executeSql('select * from favartworks;', [], (_, { rows }) =>
      setFavArtworks(rows._array)
      );
    });
  }


  const getArtworks = async() => {

    axios({
      url: 'https://api.igdb.com/v4/artworks',
      method: 'POST',
      headers: {
          'Content-Type': 'text/plain',
          'Client-ID': TWITCH_CLIENT_ID,
          'Authorization' : TWITCH_APP_ACCESS_TOKEN,
      },
      data: `fields image_id, game.name; where game.name ~ *"${searchWord}"*;`,
    })
      .then(response => {setArtworks(response.data);
      })
      .catch(err => {
          console.error(err);
      });
    }
  
  const listSeparator = () =>  {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return(
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput 
          style={{fontSize: 18, width: 200}} 
          placeholder="Name of the Game"
          onChangeText={searchWord => setSearchWord(searchWord)}
        />
      </View>
      <View style={styles.button}>
        <View style={styles.buttonleft}>
          <Ionicons 
            name="search" 
            size={30} 
            onPress={getArtworks}
          />
        </View>
        <View style={styles.buttonright}>
          <Ionicons 
            name="book-outline" 
            size={30} 
            onPress={() => navigation.navigate('Favourite Artworks', {favouriteartworks: favartworks})}
          />
        </View>
      </View>
      <FlatList
        data={artworks}
        style={{marginLeft : "5%"}}
        renderItem={({item}) =>
          <View style={styles.item}> 
            <Text style={{fontSize: 25, textAlign: 'center'}}>{item.game.name}</Text>
             <Ionicons 
                name="add-circle-sharp" 
                size={40} 
                color="limegreen"
                onPress={() => saveItem(item.id, item.game.name, item.image_id)}>
            </Ionicons>
            <Image
              style={{width: 300 , height: 300, resizeMode: 'contain'}}
              source={{uri:"https://images.igdb.com/igdb/image/upload/t_720p/" + item.image_id + ".jpg"}}
            />
          </View>}
        ItemSeparatorComponent={listSeparator}
      />
    </View>
  );
}


const styles = StyleSheet.create({
   container: {
      height: 100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   item: {
    backgroundColor: '#FCFDCF',
    borderWidth: 10,
    padding: 9,
    borderColor: '#298F9D',
    alignItems: 'center',
    justifyContent: 'center',
   },
   searchbar:{
    borderWidth: 7,
    borderColor: '#298F9D',
   },
   button: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 7,
   },
   buttonleft: {
     paddingRight: 20 
   },
   buttonright: {
    paddingLeft: 20 
  }
});