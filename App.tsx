import React, {} from 'react'
import {  Text, View, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/Pages/home'
const Pages = createStackNavigator()
import AddNoteData from './src/Pages/addNote'
export default function App() {
  return (
    <NavigationContainer>
      <Pages.Navigator initialRouteName="Home" headerMode="none">
        <Pages.Screen component={Home} name="Home"/>
        <Pages.Screen component={AddNoteData} name="AddNoteData" />
      </Pages.Navigator>
      
    </NavigationContainer>
  )
}
