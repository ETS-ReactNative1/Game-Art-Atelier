import React from "react";
import { View, Text, TextInput, Image, Button, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as SQLite from 'expo-sqlite';
import {TWITCH_CLIENT_ID, TWITCH_APP_ACCESS_TOKEN} from "@env";
import { Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Calculator ({navigation})  {

  const [searchWord, setSearchWord] = useState('');
  const [characters, setCharacters] = useState([]);
  const [favcharas, setFavCharas] = useState([]);
    
  const favcharasDb = SQLite.openDatabase('favcharas.db');
    
    
  useEffect(() => {
    favcharasDb.transaction(tx => {
      tx.executeSql('create table if not exists favcharas (id integer primary key not null, name text, description text, imageid text);');
    }, null, updateList);
  }, []);
    
    
  const saveItem = (id, name, description, imageid) => {
    favcharasDb.transaction(tx => {
      tx.executeSql('insert into favcharas (name, description, imageid) values (?, ?, ?);', 
      [name, description, imageid]);
    }, null, updateList);
    Alert.alert('Save Successful', name + " has been saved successfully.");
  }
    
  const updateList = () => {
    favcharasDb.transaction(tx => {
      tx.executeSql('select * from favcharas;', [], (_, { rows }) =>
        setFavCharas(rows._array)
      );
    });
  }
      
  const getCharacters = async() => {
    
    axios({
      url: 'https://api.igdb.com/v4/characters',
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'Client-ID': TWITCH_CLIENT_ID,
        'Authorization' : TWITCH_APP_ACCESS_TOKEN,
      },
      data: `fields name, description, mug_shot.image_id; where name ~ *"${searchWord}"*;`,
    })
    .then(response => {setCharacters(response.data);
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
          placeholder="Name of the Character"
          onChangeText={searchWord => setSearchWord(searchWord)}
        />
      </View>
      <View style={styles.button}>
        <View style={styles.buttonleft}>
          <Ionicons 
            name="search" 
            size={30} 
            onPress={getCharacters}
          />
        </View>
        <View style={styles.buttonright}>
          <Ionicons 
            name="book-outline" 
            size={30} 
            onPress={() => navigation.navigate('Favourite Characters', {favouritecharacters: favcharas})}
          />
        </View>
      </View>
      <FlatList
        data={characters}
        style={{marginLeft : "5%"}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <View style={styles.item}> 
            <Text style={{fontSize: 25, textAlign: 'center'}}>{item.name}</Text>
            <Ionicons 
              name="add-circle-sharp" 
              size={40} 
              color="limegreen"
              onPress={() => saveItem(item.id, item.name, item.description, item.mug_shot.image_id)}>
            </Ionicons>
            <Image
              style={{width: 250 , height: 250, resizeMode: 'contain'}}
              source={{uri:"https://images.igdb.com/igdb/image/upload/t_720p/" + item.mug_shot.image_id + ".jpg"}}
            />
            <Text style={{padding: 7}}>{item.description}</Text>
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
       borderColor: '#9D299D',
       alignItems: 'center',
       justifyContent: 'center',
      },
      searchbar:{
       borderWidth: 7,
       borderColor: '#9D299D',
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