import React, { Component } from 'react'
import { View, Button, StyleSheet, ImageBackground } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import imageBackground from '../../assets/white-cat.jpg'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'

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
                <ButtonWithBackground color='#a5b4ef'>
                    Switch to Login
                </ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder='Your E-Mail Address' style/>
                    <DefaultInput placeholder='Password'/>
                    <DefaultInput placeholder='Confirm Password'/>
                </View>
                <ButtonWithBackground color='#a5b4ef' onTekan={this.loginHandler}>
                    Login
                </ButtonWithBackground>
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