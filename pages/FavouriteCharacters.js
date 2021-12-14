import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function FavouriteCharacters({ route, navigation }) {

  const { favouritecharacters } = route.params;
  const favcharasDb = SQLite.openDatabase('favcharas.db');


  const deleteItem = (id, name) => {
    favcharasDb.transaction(
      tx => {
        tx.executeSql(`delete from favcharas where id = ?`, [id]);
      }, null
    );
    Alert.alert('Deletion Successful', name + " has been deleted successfully. You will be redirected to the Main Page in order to save the changes.", 
    [
      {
        text: "OK",
        onPress: () => {navigation.navigate('Main Page')} 
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favouritecharacters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => 
          <View style={styles.item}> 
            <Text style={{fontSize: 25, textAlign: 'center'}}>{item.name}</Text>
            <Ionicons 
              name="trash-sharp" 
              size={40} 
              color="red"
              onPress={() => deleteItem(item.id, item.name)}>
            </Ionicons>
            <Image
              style={{width: 300, height: 350, resizeMode: 'contain'}}
              source={{uri:"https://images.igdb.com/igdb/image/upload/t_720p/" + item.imageid + ".jpg"}}
            />
            <Text style={{padding: 7}}>{item.description}</Text>
          </View>}
      />
    </View>
  );
}

  const styles = StyleSheet.create({
      container: {
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
    });