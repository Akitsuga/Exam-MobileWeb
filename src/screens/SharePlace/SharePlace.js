import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'

import { addPlace, createData } from '../../store/actions/index'
import { Fire } from '../../firebase/index'

import imageBackground from '../../assets/react-native-wide.png'
import imageBackgroundWorld from '../../assets/world-map.jpg'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import AgeInput from '../../components/AgeInput/AgeInput'
import PositionInput from '../../components/PositionInput/PositionInput'

class SharePlaceScreen extends Component {
    state = {
        placeName : '',
        age: '',
        position: ''
    }

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress'){
            if (event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }
    
    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        })
    }

    AgeChangedHandler = (val) => {
        this.setState({
            age: val
        })
    }

    PositionChangedHandler = (val) => {
        this.setState({
            position: val
        })
    }

    placeAddedHandler = () => {
        var places = Fire.database().ref('places')
        if(this.state.placeName.trim() !== ''){
            // input data ke firebase
            places.push({
                name: this.state.placeName,
                uid: this.props.user,
                age: this.state.age,
                position: this.state.position
            }).then(res => {
                // ambil semua data di firebase, lempar ke redux
                places.once('value', this.props.onCreateData, (err)=>{console.log(err)})
            })
        }
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Input Data Karyawan</HeadingText>
                    </MainText>
                    <PlaceInput
                        placeName = {this.state.placeName}
                        onChangeText = {this.placeNameChangedHandler}
                    />
                    <AgeInput
                        placeName = {this.state.age}
                        onChangeText = {this.AgeChangedHandler}
                    />
                    <PositionInput
                        placeName = {this.state.position}
                        onChangeText = {this.PositionChangedHandler}
                    />
                    <Button title='Share Place' onPress={this.placeAddedHandler}/>
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
        onAddPlace: placeName => dispatch(addPlace(placeName)),
        onCreateData: items => dispatch(createData(items))
    }
}

const mstp = state => {
    return {
        user: state.auth.user.uid
    }
}

export default connect(mstp, mapDispatchToProps)(SharePlaceScreen) 