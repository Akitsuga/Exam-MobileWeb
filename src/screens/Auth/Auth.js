import React, { Component } from 'react'
import { View, Button, StyleSheet, ImageBackground } from 'react-native'

import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import imageBackground from '../../assets/white-cat.jpg'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'

class AuthScreen extends Component {
    state = {
        authMode : 'login'
    }
    
    loginHandler= () => {
        startMainTabs()
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === 'login' ? 'signup' : 'login'
            }
        })
    }

    render () {
        let submitButtonControl, headingTextControl
        let confirmPasswordControl = null

        if(this.state.authMode === 'signup'){
            confirmPasswordControl = (
                <DefaultInput placeholder='Confirm Password'/>
            )
            submitButtonControl = (
                <ButtonWithBackground color='#a5b4ef' onTekan={this.loginHandler}>
                    Signup
                </ButtonWithBackground>
            )

            headingTextControl = (
                <MainText>
                    <HeadingText>Please Sign Up</HeadingText>
                </MainText>
            )
        } else {
            submitButtonControl = (
                <ButtonWithBackground color='#a5b4ef' onTekan={this.loginHandler}>
                    Login
                </ButtonWithBackground>
            )

            headingTextControl = (
                <MainText>
                    <HeadingText>Please Log In</HeadingText>
                </MainText>
            )
        }

        return (
            <ImageBackground source={imageBackground} style={styles.backgroundImage}>
            <View style={styles.container}>
            {headingTextControl}
                <ButtonWithBackground color='#a5b4ef' onTekan={this.switchAuthModeHandler}>
                    Switch to {this.state.authMode === 'login' ? 'Signup' : 'Login'}
                </ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder='Your E-Mail Address' style/>
                    <DefaultInput placeholder='Password'/>
                    {confirmPasswordControl}
                </View>
                {submitButtonControl}
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