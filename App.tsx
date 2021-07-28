import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {  Text, View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './useFront/home'
const Pages = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Pages.Navigator initialRouteName="Home" headerMode="none">
        <Pages.Screen component={Home} name="Home"/>
      </Pages.Navigator>
    </NavigationContainer>
  )
}
