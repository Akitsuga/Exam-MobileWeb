import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native'

const PlaceDetail = props => {
    let modalContent = null

    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image
                    style={styles.placeImage}
                    source={props.selectedPlace.image}
                />
                <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
            </View>
        )
    }
    return(
        <Modal
            visible={props.selectedPlace !== null}
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <Button title='Delete' color='red'/>
                <Button title='Close'/>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    modalContainer : {
        padding: 22
    },
    placeImage: {
        width: '100%',
        height: 220
    },
    placeName : {
        fontWeight: 'bold',
        fontSize : 28,
        textAlign :'center'
    },
    button : {
        margin: 10
    }
})

export default PlaceDetail