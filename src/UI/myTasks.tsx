import React, {} from 'react'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import {getData} from './../Func/AsyncStorage'

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
/*
taskTitle:task,
                    taskDetails:detail,
                    isDone:false */

const MyTasks = ({...props}) =>{

    const Datas = props.datas
   
    return (
        <View style={currentTask.container}>
                <ScrollView style={{width:"100%",height:"100%"}}>
                    <View style={{width:"100%",height:"auto", alignItems:"center"}}>
                        {
                        Datas.reduce((acc:any, curr:any)=>[curr,...acc],[]).map(
                            
                            (res:any, ind:any) =>{
                                return(
                                    <Task TaskName={res.taskTitle} isChecked={res.isDone} />
                                )
                            }
                        )
                    }
                    </View>

                </ScrollView>
        </View>
    )
}

export default MyTasks