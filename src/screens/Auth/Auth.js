import React, { Component } from 'react'
import { View, Button, StyleSheet, ImageBackground } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import imageBackground from '../../assets/white-cat.jpg'

class AuthScreen extends Component {
    loginHandler= () => {
        startMainTabs()
    }

    render () {
        return (
            <ImageBackground source={imageBackground} style={styles.backgroundImage}>
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
                <Button title='Switch to Login'/>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder='Your E-Mail Address'/>
                    <DefaultInput placeholder='Password'/>
                    <DefaultInput placeholder='Confirm Password'/>
                </View>
                <Button title='Login' onPress={this.loginHandler}/>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    }
})

export default AuthScreen 