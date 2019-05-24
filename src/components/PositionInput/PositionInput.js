import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class PositionInput extends Component{
    PositionChangedHandler = (val) => {
        this.setState({position: val})
    }

    render(){
        return(
            <DefaultInput
                placeholder='Jabatan'
                value = {this.props.position}
                onChangeText = {this.props.onChangeText}
            />
        )
    }
}

export default PositionInput;