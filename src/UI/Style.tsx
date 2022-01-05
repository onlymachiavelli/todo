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
        
    },
    Text:{
        color:"#fff",
        fontWeight:"bold",
    },
    start_flex:{
        alignSelf:"flex-start"
    },
    end_flex:{
        alignSelf:"flex-end"
    },

    logo:{
        flexDirection:"row",
        flexWrap:"wrap",
        flex:1,
        justifyContent:"space-between",
        width:"20%",
    }
})