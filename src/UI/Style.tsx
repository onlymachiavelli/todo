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
        backgroundColor:Colors.dark,
        marginTop:35,
    }
})

export const headerStyle = Style({
    container:{
        width:"100%",
        height:"auto",
        paddingTop:10
    },
    textLogo:{
        marginLeft:60,
        marginTop:-43,
        color:"#fff",
        fontWeight:"bold",
    },
    Button:{
        width:50,
        height:50,
        backgroundColor:Colors.purple,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        paddingTop:-5,
        borderWidth:1,
        borderColor:"#fff",
        shadowColor: "#fff",
        shadowOffset: {
            width: 3,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        
        elevation: 20,
    },

    buttonBlock:{
        right:8,
        top:20,
        position:"absolute"
    }
})

export const emptyStyle = Style({
    container:{
        
        justifyContent: 'center', 
        alignItems: 'center',
        width:"80%",
        height:"40%",
        position:"absolute",
        top:"20%",
        alignSelf:"center",
        transform:[{translateY:50}],
        backgroundColor:Colors.purple,
        borderRadius:10,
        //borderWidth:1,
        //borderColor:"#fff",
        shadowColor: "#fff",
        shadowOffset: {
            width: 3,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        
        elevation: 20,
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
    }
})

export const addBtn = Style({
    
})