import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './pages/Index';
import Search from './pages/Search';
import SearchCharacters from './pages/SearchCharacters';
import FavouriteCharacters from './pages/FavouriteCharacters';
import SearchArtworks from './pages/SearchArtworks';
import FavouriteArtworks from './pages/FavouriteArtworks';
import SearchCovers from './pages/SearchCovers';
import FavouriteCovers from './pages/FavouriteCovers';
import Feedback from './pages/Feedback';
import { sendEmail } from './pages/SendEmail';
import { Header } from 'react-native-elements';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
      <NavigationContainer>
        <Header
          backgroundColor= '#9D2933'
          centerComponent={{text: 'GAME ART ATELIER', style: { color: '#FCFFA4', fontSize: 20, padding: 4 } }}
        />
        <Stack.Navigator>
          <Stack.Screen name="Main Page" component={Index}/>
          <Stack.Screen name="Search" component={Search}/>
          <Stack.Screen name="Search Characters" component={SearchCharacters} />
          <Stack.Screen name="Favourite Characters" component={FavouriteCharacters} />
          <Stack.Screen name="Artworks" component={SearchArtworks} />
          <Stack.Screen name="Favourite Artworks" component={FavouriteArtworks} />
          <Stack.Screen name="Search Covers" component={SearchCovers} />
          <Stack.Screen name="Favourite Covers" component={FavouriteCovers} />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="Send Email" component={sendEmail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
