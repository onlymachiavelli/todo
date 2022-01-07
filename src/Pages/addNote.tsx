import React, {} from 'react'

import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {homeStyle, addNoteStyle} from './../UI/Style'
import {Pen, Details, X} from './../UI/SVG'
import Header from '../UI/Header'
import home from './home'

const StoreData  = ():void =>{
    
}
const AddNoteData = ({navigation}) =>{
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
                            <TextInput style={addNoteStyle.txtArea} placeholder='DETAILS' editable placeholderTextColor={"#fff"} multiline numberOfLines={13}  />
                        </View>                
                    </ScrollView>
                </View>
                <TouchableOpacity style={addNoteStyle.button}>
                    <Text style={addNoteStyle.textButton}>ADD DATA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={addNoteStyle.cancelBtn} onPress={()=>{
                    navigation.navigate(home)
                }}>
                    <X Width="20" Height="20" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddNoteData 