import React from 'react'
import {View, ScrollView, Dimensions, Text, TextInput} from 'react-native'
import {HomeStyle, Common} from './../Packs/styles'
import {Icon} from './../Packs/icons'

const Navbar = () =>{
    return(
            <View style={Common.Navbar} >
                <View style={Common.Nvlogo}>
                   <Text>
                        <Icon/>
                    </Text>
                    <Text style={Common.Nvtext}>TODO App</Text>
                   
                   <View>
                    </View>
                </View>
            </View>
    )
}

export default Navbar