import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function FavouriteCovers({ route, navigation }) {

  const { favouritecovers } = route.params;
  const favcoversDb = SQLite.openDatabase('favcovers.db');
    

  const deleteItem = (id, name) => {
    favcoversDb.transaction(
      tx => {
        tx.executeSql(`delete from favcovers where id = ?`, [id]);
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
        data={favouritecovers}
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
      backgroundColor: '#FCFDCF',
      borderWidth: 10,
      padding: 9,
      borderColor: '#9D8029',
      alignItems: 'center',
      justifyContent: 'center',
   },
});