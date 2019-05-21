import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import ListItem from './src/components/ListItem/ListItem'

export default class App extends Component{
  state = {
    places: []
  }

  placeSubmitHandler = placeName => {
    if(placeName.trim() === ""){ // "   Alvin    " "Alvin" || "      " ""
      return // berhenti
    }

    // setState diberikan function, property yg masuk adalah data state sebelumnya
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {
    const outputList = this.state.places.map((place, i) => {
      return <ListItem key={i} placeName = {place}/>
    })
    return (
      <View style={styles.container}>
        <PlaceInput onSubmitHandler = {this.placeSubmitHandler}/>
        <View>
          {outputList}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 26
    }
})