import React, {} from 'react'
import { StyleSheet, Dimensions} from 'react-native'

const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

const Colors = {
    purple : "#9D3AC0" , 
    dark : "#1F1F1F" ,
    darkPurple:"#542265",
    red:"#C11313"
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
    Form:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
    },
    Input:{
        width:"85%",
        height:"auto",
        backgroundColor:Colors.darkPurple,
        justifyContent:"center",
        borderRadius:50,
        paddingBottom:10,
        borderWidth:1,
        borderColor:Colors.purple,
        
    },
    SVG:{
        marginLeft:20,
        marginTop:13,
    },
    textInput:{
        color:"#fff",
        width:"76%",
        marginLeft:50,
        marginTop:-24,
        fontWeight:"600"
    },
    //the block !
    textArea:{
        width:"85%",
        height:300,
        backgroundColor:Colors.darkPurple,
        marginTop:20,
        paddingBottom:20,
        borderWidth:1,
        borderColor:Colors.purple,
        borderRadius:10,
        paddingTop:10
        
    },
    txtArea:{
        fontWeight:"600",
        width:"90%",
        color:"#fff",
        height:"auto",
        padding:10,
        borderBottomWidth:1,
        borderColor:"#fff",
        marginTop:20,
        
        
    },
    txtTitle:{
        color:"#fff",

    },
    Scroll:{
        width:"100%",
        height:"auto",
    },
    SvG:{
        marginLeft:10
    },
    t:{
        color:"#fff",
        fontWeight:"600",
        marginLeft:45,
        marginTop:-19,
    },


    button:{
        width:300,
        height:50,
        backgroundColor:Colors.purple,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        borderRadius:50,
        borderWidth:1,
        borderColor:Colors.darkPurple

    },
    textButton:{
        color:"#fff",
        fontWeight:"bold",
       
        
    },
    cancelBtn:{
        width:50,
        height:50,
        backgroundColor:Colors.red,
        borderRadius:50,
        marginTop:20,
        borderWidth:1,
        borderColor:"#fff",
        alignItems:"center",
        justifyContent:"center"


    },

})