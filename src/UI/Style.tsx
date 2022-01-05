import React, {} from 'react'
import { StyleSheet, Dimensions} from 'react-native'

const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

const Colors = {
    purple : "#9D3AC0" , 
    dark : "#1F1F1F" 
}
const Style = (styleDatas) =>  StyleSheet.create(styleDatas)
export const homeStyle = Style({
    container:{
        width : deviceWidth,
        height:deviceHeight,
        backgroundColor:Colors.dark
    }
})

export const headerStyle = Style({
    container:{
        width:"100%",
        height:"auto",
        paddingTop:10
    },
    textLogo:{
        marginLeft:70,
        marginTop:-43,
        color:"#fff",
        fontWeight:"bold",
    },

})