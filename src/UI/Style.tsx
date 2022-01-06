import React, {} from 'react'
import { StyleSheet, Dimensions} from 'react-native'

const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

const Colors = {
    purple : "#9D3AC0" , 
    dark : "#1F1F1F" 
}
const Style = (styleDatas:object) =>  StyleSheet.create(styleDatas)
export const homeStyle = Style({
    container:{
        width : deviceWidth,
        height:deviceHeight,
        backgroundColor:Colors.dark,
        marginTop:35,
    },
    Title:{
        color:"#fff",
        fontWeight:"bold",
        marginTop:40,
        fontSize:30,
        textAlign:"center"

    }
})

export const headerStyle = Style({
    container:{
        width:"100%",
        height:"auto",
        paddingTop:10,
    },
    textLogo:{
        marginLeft:60,
        marginTop:-43,
        color:"#fff",
        fontWeight:"bold",
    },
    Button:{
        width:45,
        height:45,
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
        marginTop:"9%",
        //position:"absolute",
        //top:"20%",
        alignSelf:"center",
        //transform:[{translateY:50}],
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
    },
    
})

export const addBtn = Style({
    container:{
        width:"100%",
        height:"auto",
        alignItems:"center",
        marginTop:30,
    },
    Button:{
        width:70,
        height:70,
        backgroundColor:Colors.purple,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
        shadowColor: "#fff",
        shadowOffset: {
            width: 3,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,
        borderWidth:1,
        borderColor:"#fff",
    },
    Text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:30,
    }
})

export const addNoteStyle = Style({
    
})