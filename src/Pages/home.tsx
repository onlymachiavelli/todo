import React ,{ useState, useEffect } from 'react'
import {View, Text, TouchableOpacity}from 'react-native'
import {homeStyle, emptyStyle, addBtn, headerStyle} from './../UI/Style'
import {storeData , getData, getAll,clearStorage,} from './../Func/AsyncStorage'
import Header from './../UI/Header'
import AddNoteData from './addNote'
import {Rocket} from './../UI/SVG'
import MyTasks, { Task } from '../UI/myTasks'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
const Pages = createStackNavigator()

const Empty = () =>{
    return (
        <View style={emptyStyle.container} elevation={5}>
            <Rocket Width="180" Height="220" />
            <Text style={emptyStyle.text}>NO TASKS</Text>
        </View>
    )
}

export const AddBtn = ({...props}) =>{
    return (
        <View style={addBtn.container}>
            <TouchableOpacity style={addBtn.Button} onPress={props.Travel}>
               <Text style={addBtn.Text}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
const Home = ({navigation}) =>{
    const [size, setSize] = useState(0)
    const [datas, setDatas] = useState([])
    const [homeComp, setComp] = useState(<Empty/>)

    useEffect(()=>{
        getData("todoTask").then((res:any)=>{
            let len = res.length
            setDatas(len > 0 ? res : datas)
            
           setSize(len)
           setComp(size ===  0 ? homeComp :  <MyTasks datas={datas} />  )  
        })
    },[])
     
     
    
    return(
        <View style={homeStyle.container}>
            <Header/>

                <Text style={homeStyle.Title}>CURRENT TASKS : {String(size)}</Text>
                {homeComp}

            <AddBtn Travel={()=>{
                navigation.navigate(AddNoteData)
            }}/>
        </View>
    )


}

export default Home