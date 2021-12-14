import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';

export default function Index({navigation}) {

  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingTop: 5, paddingBottom: 7}}>
          <Text style={{fontSize: 30}}>The Art of Video Games</Text>
      </View>
      <View style={{margin: 3, flex: 7, paddingLeft: 0}}>
          <Text style={{fontSize: 17, paddingLeft: 20}}>This application is those who enjoy</Text>
          <Text style={{fontSize: 17, paddingLeft: 15, paddingBottom: 20}}>visual art production in video games:</Text>
          <Text style={{paddingLeft: 12}}>Search for production art, cover illustrations</Text>
          <Text style={{paddingLeft: 15, paddingBottom: 20}}>and character designs from various games.</Text>
          <Text style={{paddingLeft: 15, paddingBottom: 20}}>Save your favourites in the Favourites lists. </Text>
          <Text style={{paddingLeft: 20, paddingBottom: 20}}>Send us feedback in case of questions. </Text>
          <Text style={{paddingLeft: 75}}> Henry Friman 2021</Text>    
      </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/GameArtAtelier.png')}/>
    </View>
      <View style={styles.button}>
        <View style={styles.buttonleft}>
          <Button color = "#9d2933" onPress={() => navigation.navigate("Search")} title="Search"/>
        </View>
        <View style={styles.buttonright}>
          <Button color = "#9d2933" onPress={() => navigation.navigate("Feedback")} title="Feedback"/>
        </View>
      </View>
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
  button: {
   flexDirection: 'row',
   justifyContent: 'center',
   padding: '20%'
  },
  buttonleft: {
    paddingRight: 20 
  },
  buttonright: {
   paddingLeft: 20 
  },
  image: {
    height: 150,
    width: 300,
  }
});