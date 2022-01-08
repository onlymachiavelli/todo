import React, {} from 'react'
import {View, Text} from 'react-native'

import {} from './SVG'
import {currentTask, taskStyle} from './Style'
export const Task = ({...props}) =>{
    return(
        <View style={[currentTask.TaskBlock , taskStyle("").TaskBlock]}>

        </View>
    )
}
const MyTasks = ({...props}) =>{
    const Datas = [
        {
            taskTitle:"fucking your bitch",
            Details:"Im going to fuck your bitch until you die",
            isDone:false
        },
        {
            taskTitle:"fucking your bitch",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
        {
            taskTitle:"fucking your bitch",
            Details:"Im going to fuck your bitch until you die",
            isDone:false
        },
        {
            taskTitle:"fucking your bitch",
            Details:"Im going to fuck your bitch until you die",
            isDone:false
        },
        {
            taskTitle:"fucking your bitch",
            Details:"Im going to fuck your bitch until you die",
            isDone:true
        },
    ]

    /*
    
    {
                Datas.reduce((acc:any, curr:any)=>[curr,acc],[]).map(
                    
                    (res, ind) =>{
                        return(
                            <View>
                                <Text></Text>
                            </View>
                        )
                    }
                 )
            }
    */ 
   
    return (
        <View style={currentTask.container}>
        <Task/>
        </View>
    )
}

export default MyTasks