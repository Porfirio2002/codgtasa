import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {Inicio} from './src/Pages/Inicio'


const Navegacao = createStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      <Navegacao.Navigator>
        <Navegacao.Screen name= "GTA SAN ANDREAS" component={Inicio} />
      </Navegacao.Navigator>
    </NavigationContainer>
  
  );
}
