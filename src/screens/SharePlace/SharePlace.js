import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'

import { addPlace } from '../../store/actions/index'

import imageBackground from '../../assets/react-native-wide.png'
import imageBackgroundWorld from '../../assets/world-map.jpg'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'

class SharePlaceScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        console.log(event);
        if (event.type === 'NavBarButtonPress'){
            if (event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }
    
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName)
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share Place with Us !</HeadingText>
                    </MainText>
                    <View style={styles.placeholder}>
                        <Image source={imageBackground} style={styles.previewImage}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Locate Me'/>
                    </View>
                    <View style={styles.placeholder}>
                        <Image source={imageBackgroundWorld} style={styles.previewImage}/></View>

                    <View style={styles.button}>
                    <DefaultInput placeholder='Place Name'/>
                        <Button title='Share Place'/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: '100%',
        height: '100%'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen) 