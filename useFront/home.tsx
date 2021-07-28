import React from 'react'
import {View, ScrollView, Dimensions, Text, TextInput} from 'react-native'
import {HomeStyle, Common} from './../Packs/styles'
import {Icon} from './../Packs/icons'

const Home = () =>{
    return(
        <View style={HomeStyle.root}>
            <ScrollView style={Common.Full}>
                <View style={Common.Navbar} >
                    <View style={Common.Nvlogo}>
                       <View></View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home