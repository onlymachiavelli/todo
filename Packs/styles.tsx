import { StyleSheet, Dimensions} from "react-native"
const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

 export const HomeStyle = StyleSheet.create({
    root:{
        width:Width,
        height:Height,
        backgroundColor:"#1F1F1F",
    },
   
    
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
        
    }
})