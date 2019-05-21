import React from 'react'
import {View, StyleSheet} from 'react-native'

import ListItem from '../ListItem/ListItem'

const PlaceList = props => {
    const outputList = props.places.map((place, i) => {
        return <ListItem 
        key={i}
        placeName = {place}
        onPressItem = {() => {props.onDeletedHandler(i)}}
        />
    })

    return (
        <View style = {styles.listContainer}>
            {outputList}
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default PlaceList