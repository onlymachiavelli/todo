import React, { useState } from 'react'

import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {homeStyle, addNoteStyle} from './../UI/Style'
import {Pen, Details, X} from './../UI/SVG'
import Header from '../UI/Header'
import home from './home'
import { getData, storeData } from '../Func/AsyncStorage'
export const putIn  = (task:any, detail:any):void =>{
    //get the datas 
    /*
{
            taskTitle:"fucking your bitch1",
            Details:"Im going to fuck your bitch until you die",
            isDone:false
        },
*/
    let datas:any
    getData("todoTask").then(
        (res)=>{
            datas = res
        }
    )
    datas.push({
        taskTitle:task,
        taskDetails:detail
    })
    storeData("todoTask",datas)
        
}
const AddNoteData = ({navigation}) =>{
    const [taskTitle, setTask] = useState("")
    const [details, setDetails] = useState("")


    return (
        <View style={homeStyle.container}>
            <Header/>
            <Text style={homeStyle.Title}>
                ADD TODO
            </Text>

            <View style={addNoteStyle.Form} >
                <View style={addNoteStyle.Input} > 
                    <Pen Width="21" Height="21" Style={addNoteStyle.SVG} />
                    <TextInput placeholder='YOUR TASK' placeholderTextColor={"#fff"} value={taskTitle}  onChange={
                            (e:any)=>{
                                console.log(taskTitle +"A"+ details);
                                
                                setTask(e.target.value)
                            }
                        } style={addNoteStyle.textInput}/>
                </View>

                <View style={addNoteStyle.textArea}> 
                    <View>
                        <Details Width="28" Height="21" Style={addNoteStyle.SvG} />
                        <Text style={addNoteStyle.t}>ADD SOME DETAILS</Text>   
                    </View>
                    <ScrollView style={addNoteStyle.Scroll}>
                        <View style={{width:"100%",height:"auto",alignItems:"center"}}>
                            <TextInput style={addNoteStyle.txtArea}  placeholder='DETAILS' editable placeholderTextColor={"#fff"} multiline numberOfLines={13} value={details} onChange={
                                (e:any)=>{
                                    setDetails(e.target.value)
                                }
                            } />
                        </View>                
                    </ScrollView>
                </View>
                <TouchableOpacity style={addNoteStyle.button} onPress={()=>{
                    putIn(taskTitle, details)
                }}                                      >
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