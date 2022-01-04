import React ,{ useState } from 'react'
import {View, Text}from 'react-native'
import {homeStyle} from './../UI/Style'
import {storeData , getData} from './../Func/AsyncStorage'


const Empty = () =>{
    return (
        <View><Text>Nothing Here</Text></View>
    )
}
const Home = () =>{
    storeData("tst",{name : "alaa", lname : "barka"})
    
    const [data, setdata] = useState({})
    getData("tst").then(res => setdata(res))



    return(
        <View style={homeStyle.container}>
            
        </View>
    )


}

export default Home