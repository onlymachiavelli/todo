import React, {} from 'react'

import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import {homeStyle} from './../UI/Style'
import {Pen} from './../UI/SVG'
import Header from '../UI/Header'


const AddNoteData = () =>{
    return (
        <View style={homeStyle.container}>
            <Header/>
            <Text style={homeStyle.Title}>
                ADD TODO
            </Text>

            <View>
                <View> 
                    <Pen Width="21" Height="21" />
                    <TextInput placeholder='YOUR TASK' placeholderTextColor={"#fff"} onChange={()=>{}}/>
                </View>
            </View>
        </View>
    )
}

export default AddNoteData 