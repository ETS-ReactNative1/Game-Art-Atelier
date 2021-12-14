import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SearchCharacters from './SearchCharacters';
import SearchArtworks from './SearchArtworks';
import SearchCovers from './SearchCovers';
import { Ionicons } from '@expo/vector-icons';


export default function Search() {

  const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Characters') {
            iconName = focused ? 'people-sharp' : 'people-outline';
          } else if (route.name === 'Artworks') {
            iconName = focused ? 'brush-sharp' : 'brush-outline';
          } else if (route.name === 'Covers') {
            iconName = focused ? 'game-controller-sharp' : 'game-controller-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#9d2933',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Characters" component={SearchCharacters} />
      <Tab.Screen name="Artworks" component={SearchArtworks} />
      <Tab.Screen name="Covers" component={SearchCovers} />
    </Tab.Navigator>
  );
}