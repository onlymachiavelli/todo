import React, {} from 'react'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'

import {Bars,Trash } from './SVG'
import {currentTask, taskStyle} from './Style'
export const Task = ({...props}) =>{
    return(
        <View style={[currentTask.TaskBlock , taskStyle(props.isChecked).TaskBlock]}>
            <TouchableOpacity onPress={()=>{alert("Hello world")}}>
                <Bars Width="20" Height="20" />
            </TouchableOpacity>
            <Text style={currentTask.txt} >{props.TaskName}</Text>
            <TouchableOpacity style={currentTask.trashIcon}>
                <Trash Width="20" Height="80" />
            </TouchableOpacity>
        </View>
    )
}
const MyTasks = ({...props}) =>{
    const Datas = [
        {
            taskTitle:"fucking your bitch1",
            Details:"Im going to fuck your bitch until you die",
            isDone:false
        },
        {
            taskTitle:"fucking your bitch2",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
        {
            taskTitle:"fucking your bitch3",
            Details:"Im going to fuck your bitch until you die",
            isDone:false
        },
        {
            taskTitle:"fucking your bitch4",
            Details:"Im going to fuck your bitch until you die",
            isDone:false
        },
        {
            taskTitle:"fucking your bitch5",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
        {
            taskTitle:"fucking your bitch6",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
        {
            taskTitle:"fucking your bitch7",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
        {
            taskTitle:"fucking your bitch8",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
        {
            taskTitle:"fucking your bitch9",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
        {
            taskTitle:"fucking your bitch10",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
        {
            taskTitle:"fucking your bitch11",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
    ]

   
    return (
        <View style={currentTask.container}>
            <View style={{width:"100%" , alignItems:"center",}}>
                <ScrollView style={{width:"100%",height:"100%"}}>
                {
                    Datas.reduce((acc:any, curr:any)=>[curr,...acc],[]).map(
                        
                        (res:any, ind:any) =>{
                            return(
                                <Task TaskName={res.taskTitle} isChecked={res.isDone} />
                            )
                        }
                    )
                }
                </ScrollView>
            </View>
        </View>
    )
}

export default MyTasks