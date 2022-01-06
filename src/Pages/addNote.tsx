import React, {} from 'react'

import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import {homeStyle, addNoteStyle} from './../UI/Style'
import {Pen} from './../UI/SVG'
import Header from '../UI/Header'


const AddNoteData = () =>{
    return (
        <View style={homeStyle.container}>
            <Header/>
            <Text style={homeStyle.Title}>
                ADD TODO
            </Text>

            <View style={addNoteStyle.Form} >
                <View style={addNoteStyle.Input} > 
                    <Pen Width="21" Height="21" Style={addNoteStyle.SVG} />
                    <TextInput placeholder='YOUR TASK' placeholderTextColor={"#fff"} onChange={()=>{}} style={addNoteStyle.textInput}/>
                </View>

                <View > 
                    <TextInput placeholder='DETAILS' placeholderTextColor={"#fff"} />
                </View>
            </View>
        </View>
    )
}

export default AddNoteData 