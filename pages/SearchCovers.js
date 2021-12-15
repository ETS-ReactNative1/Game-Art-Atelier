import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';
import {TWITCH_CLIENT_ID, TWITCH_APP_ACCESS_TOKEN} from '@env';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function SearchCovers( { navigation } ) {

  const [searchWord, setSearchWord] = useState('');
  const [gameCovers, setGameCovers] = useState([]);
  const [favcovers, setFavCovers] = useState([]);

  const favcoversDb = SQLite.openDatabase('favcovers.db');

  useEffect(() => {
    favcoversDb.transaction(tx => {
      tx.executeSql('create table if not exists favcovers (id integer primary key not null, name text, imageid text);');
    }, null, updateList);
  }, []);


  const saveItem = (id, name, imageid) => {
    favcoversDb.transaction(tx => {
      tx.executeSql('insert into favcovers (name, imageid) values (?, ?);', 
      [name, imageid]);
    }, null, updateList);
    Alert.alert('Save Successful', name + " has been saved");
  }

  const updateList = () => {
    favcoversDb.transaction(tx => {
      tx.executeSql('select * from favcovers;', [], (_, { rows }) =>
      setFavCovers(rows._array)
      );
    });
  }


  const getCovers = async() => {

    axios({
      url: 'https://api.igdb.com/v4/covers',
      method: 'POST',
      headers: {
          'Content-Type': 'text/plain',
          'Client-ID': TWITCH_CLIENT_ID,
          'Authorization' : TWITCH_APP_ACCESS_TOKEN,
      },
      data: `fields image_id, game.name; where game.name ~ *"${searchWord}"*;`,
    })
      .then(response => {setGameCovers(response.data);
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
            onPress={getCovers}
          />
        </View>
        <View style={styles.buttonright}>
          <Ionicons 
            name="book-outline" 
            size={30} 
            onPress={() => navigation.navigate('Favourite Covers', {favouritecovers: favcovers})}
          />
        </View>
      </View>
      <FlatList
        data={gameCovers}
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
              style={{width: 250, height: 250, resizeMode: 'contain'}}
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
   borderColor: '#9D8029',
   alignItems: 'center',
   justifyContent: 'center',
  },
  searchbar:{
   borderWidth: 7,
   borderColor: '#9D8029',
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