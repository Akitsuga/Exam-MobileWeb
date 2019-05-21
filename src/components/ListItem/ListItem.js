import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ListItem = props => (
    <View>
        <Text>{props.placeName}</Text>
    </View>
)

export default ListItem;