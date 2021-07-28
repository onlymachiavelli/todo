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
        height:"auto"
    }
})