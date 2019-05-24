import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class AgeInput extends Component{
    AgeChangedHandler = (val) => {
        this.setState({age: val})
    }

    render(){
        return(
            <DefaultInput
                placeholder='Umur'
                value = {this.props.age}
                onChangeText = {this.props.onChangeText}
            />
        )
    }
}

export default AgeInput;