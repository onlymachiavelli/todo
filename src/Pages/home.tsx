import React ,{ useState } from 'react'
import {View, Text}from 'react-native'
import {homeStyle} from './../UI/Style'
import {storeData , getData} from './../Func/AsyncStorage'

const Home = () =>{
    storeData("tst",{name : "alaa", lname : "barka"})
    
    const [data, setdata] = useState({})
    getData("tst").then(res => setdata(res))



    return(
        <View style={homeStyle.container}>
            <Text> 
            {JSON.stringify(data)}
            </Text>
            <Text> 
            {JSON.stringify(data)}
            </Text>
            <Text> 
            {JSON.stringify(data)}
            </Text>
            <Text> 
            {JSON.stringify(data)}
            </Text>
        </View>
    )


}

export default Home