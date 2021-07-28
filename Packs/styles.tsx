import { StyleSheet, Dimensions} from "react-native"
const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

 export const HomeStyle = StyleSheet.create({
    root:{
        width:Width,
        height:Height,
        backgroundColor:"#1F1F1F",
    },
   Plus:{
       width:80,
       height:80,
       backgroundColor:"#9D3AC0",
       alignItems:"center",
       justifyContent:"center",
       borderRadius:50,
       alignSelf:"center",
       borderColor:"#fff",
       borderWidth:0.8,
   }
    
})


export const Common = StyleSheet.create({
    Full :{
        width:"100%",
        height:"100%",
    },
    Navbar:{
        width:"100%",
        height:70,
        marginTop:40,
    },
    Nvlogo:{
        marginLeft:10,
    },
    Nvtext:{
        color:"#fff",
        marginLeft:70,
        marginTop:-43,
        fontWeight:"bold",
        fontSize:19,
        

    },
    ResContainer:{
        position:"absolute",
        right:15,
        
    },
    Button:{
        width:55,
        height:55,
        backgroundColor:"#9D3AC0",
        borderRadius:50,
        marginTop:8,
        shadowColor:"#fff",
        shadowRadius:1,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:0.8,
        borderColor:"#fff"
    
    },

})
export const EM = StyleSheet.create({
    Container:{
        width:"80%",
        height:"50%",
        backgroundColor:"#622079",
        position:"absolute",
        top:"20%",
        alignSelf:"center",
        transform:[{translateY:50}],
        borderRadius:5,borderWidth:0.8,
        borderColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
})