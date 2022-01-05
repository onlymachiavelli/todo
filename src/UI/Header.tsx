import React , {} from 'react' 
import {headerStyle} from './Style'
import { View, Text} from 'react-native'
import {Rocket} from './SVG'
const Header = () =>{
    return (
        <View>
            <View>
                <Rocket Width="59" Height="67" /> 
                <Text style={headerStyle.Text}>TODO APP</Text>
            </View>
        </View>
    )
}

export default Header