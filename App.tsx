import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {  Text, View, KeyboardAvoidingView, KeyboardAvoidingViewBase, TextInput } from 'react-native'
import {Styles} from './Packs/styles'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
const Pages = createStackNavigator

export default function App() {
  return (
    <NavigationContainer>
      <Pages.Navigator>

      </Pages.Navigator>
    </NavigationContainer>
  )
}
