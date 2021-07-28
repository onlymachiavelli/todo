import React from 'react'
import {View, ScrollView, Dimensions, Text, TextInput, TouchableOpacity, } from 'react-native'
import {HomeStyle, Common} from './../Packs/styles'
import {Icon, Plus} from './../Packs/icons'
import Empty from './navbar'
import Navbar from './empty'

const Home = () =>{
    return(
        <View style={HomeStyle.root}>
            <View style={Common.Full}>
                <Navbar/>
                <Empty/>
                <View style={{position:"absolute", bottom:30,alignSelf:"center"}}>
                    <TouchableOpacity style={HomeStyle.Plus}>
                        <Plus/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Home