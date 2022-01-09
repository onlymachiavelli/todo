import React, { useState, useEffect } from 'react'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import {getData, storeData} from './../Func/AsyncStorage'

import {Bars,Trash } from './SVG'
import {currentTask, taskStyle} from './Style'
const deleteArr = (arr : any, ind:any) =>{
    let newarr = []
    for (let i = 0; i< arr.length;i++) {
        if (i !== ind ) {
            newarr.push(arr[i])
        }
    }
    return newarr
}
const DeleteObject = (ind:any):void =>{
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        getData("todoTask").then(
            (res) =>{
                setDatas(res)
            }
        )

        let a:any = datas
        a = deleteArr(a, ind)
        setDatas(a)

        
    },[])
    storeData("todoTask", datas)
}
export const Task = ({...props}) =>{
    
    return(
        <View style={[currentTask.TaskBlock , taskStyle(props.isChecked).TaskBlock]}>
            <TouchableOpacity onPress={()=>{alert("Hello world")}}>
                <Bars Width="20" Height="20" />
            </TouchableOpacity>
            <Text style={currentTask.txt} >{props.TaskName}</Text>
            <TouchableOpacity style={currentTask.trashIcon} onPress={()=>{
                DeleteObject(props.toDelete)
            }}>
                <Trash Width="20" Height="80" />
            </TouchableOpacity>
        </View>
    )
}
const MyTasks = ({...props}) =>{

    const Datas = props.datas
   
    return (
        <View style={currentTask.container}>
                <ScrollView style={{width:"100%",height:"100%"}}>
                    <View style={{width:"100%",height:"auto", alignItems:"center"}} key={"task"} >
                        {
                        Datas.reduce((acc:any, curr:any)=>[curr,...acc],[]).map(
                            
                            (res:any, ind:any) =>{
                                return(
                                    <Task TaskName={res.taskTitle} isChecked={res.isDone} toDelete={ind} />
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