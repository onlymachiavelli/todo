import React , {} from 'react' 
import {headerStyle} from './Style'
import { View, Text} from 'react-native'
import {Rocket} from './SVG'
const Header = () =>{
    return (
        <View style={headerStyle.container}>
            <View>
                <Rocket Width="59" Height="67" /> 
                <Text style={ headerStyle.textLogo}>TODO APP</Text>
            </View>
        </View>
    )
}

export default Header