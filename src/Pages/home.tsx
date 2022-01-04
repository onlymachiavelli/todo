import React ,{ useState } from 'react'
import {View, Text}from 'react-native'
import {homeStyle} from './../UI/Style'
import {storeData , getData, getAll,clearStorage} from './../Func/AsyncStorage'
import Header from './../UI/Header'

const Empty = () =>{
    return (
        <View><Text>Nothing Here</Text></View>
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
        </View>
    )


}

export default Home