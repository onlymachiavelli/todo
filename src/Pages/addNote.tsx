import React, {} from 'react'

import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {homeStyle, addNoteStyle} from './../UI/Style'
import {Pen, Details} from './../UI/SVG'
import Header from '../UI/Header'

const StoreData  = ():void =>{
    
}
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

                <View style={addNoteStyle.textArea}> 
                <View>
                    <Details Width="28" Height="21" Style={addNoteStyle.SvG} />
                    <Text style={addNoteStyle.t}>ADD SOME DETAILS</Text>   
                </View>
                <ScrollView style={addNoteStyle.Scroll}>
                    <View style={{width:"100%",height:"auto",alignItems:"center"}}>
                        <TextInput style={addNoteStyle.txtArea} placeholder='DETAILS' editable placeholderTextColor={"#fff"} multiline  />
                    </View>                
                </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default AddNoteData 