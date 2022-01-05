import React ,{ useState } from 'react'
import {View, Text, TouchableOpacity}from 'react-native'
import {homeStyle, emptyStyle, addBtn} from './../UI/Style'
import {storeData , getData, getAll,clearStorage,} from './../Func/AsyncStorage'
import Header from './../UI/Header'

import {Rocket} from './../UI/SVG'

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
            <TouchableOpacity style={addBtn.Button}>
               <Text style={addBtn.Text}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
const Home = () =>{
    const [size, setSize] = useState(0)
     getAll().then((res:any)=>{
         let len = res.length
        setSize(len)
     })
     let HomeComponent 
     if (size === 0) {
        HomeComponent = <Empty/>
     } 
     else {

     }


    return(
        <View style={homeStyle.container}>
            <Header/>
            {HomeComponent}
            <AddBtn/>
        </View>
    )


}

export default Home