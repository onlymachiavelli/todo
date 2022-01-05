import React , {useState, useEffect} from 'react' 
import {headerStyle} from './Style'
import { View, Text, TouchableOpacity} from 'react-native'
import {Rocket} from './SVG'
export const headerVisibility = () =>{
    const [visible, setVis] = useState(false)
    useEffect(()=>{

    },[])
}
const Header = () =>{
    return (
        <View style={headerStyle.container}>
            <View>
                <Rocket Width="59" Height="67" /> 
                <Text style={ headerStyle.textLogo}>TODO APP</Text>
            </View>
            <View style={headerStyle.buttonBlock}>
                <TouchableOpacity style={headerStyle.Button} onPress={()=>{}}>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header