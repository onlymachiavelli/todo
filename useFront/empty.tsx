import React from 'react'
import {View, Text} from 'react-native'
import {Logo} from './../Packs/icons'
import {EM} from './../Packs/styles'
const Empty = () =>{
    return(
        <View style={EM.Container}>
            <Logo/>
            <Text style={{color:"#fff", fontWeight:"bold", fontSize:16}}>NO TASKS</Text>
        </View>
    )
}
export default Empty