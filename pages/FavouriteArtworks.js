import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function FavouriteArtworks({ route, navigation }) {

  const { favouriteartworks } = route.params;
  const favartworksDb = SQLite.openDatabase('favartworks.db');
  
  const deleteItem = (id, name) => {
    favartworksDb.transaction(
      tx => {
        tx.executeSql(`delete from favartworks where id = ?`, [id]);
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
        data={favouriteartworks}
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
            <Text>{item.description}</Text>
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
      backgroundColor: '#FFF9B0',
      borderWidth: 10,
      padding: 9,
      borderColor: '#298F9D',
      alignItems: 'center',
      justifyContent: 'center',
   },
});