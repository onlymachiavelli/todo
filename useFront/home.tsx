import React from 'react'
import {View, ScrollView, Dimensions, Text, TextInput} from 'react-native'
import {HomeStyle, Common} from './../Packs/styles'
import {Icon} from './../Packs/icons'
import Navbar from './navbar'

const Home = () =>{
    return(
        <View style={HomeStyle.root}>
            <ScrollView style={Common.Full}>
                <View>
                    <Navbar/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home