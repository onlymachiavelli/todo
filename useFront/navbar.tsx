import React from 'react'
import {View, ScrollView, Dimensions, Text, TextInput, TouchableOpacity} from 'react-native'
import {HomeStyle, Common} from './../Packs/styles'
import {Icon, Bars} from './../Packs/icons'

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

                <View style={Common.ResContainer}>
                    <TouchableOpacity onPress={()=>{}} style={Common.Button}>
                        <Text>
                            <Bars/>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default Navbar