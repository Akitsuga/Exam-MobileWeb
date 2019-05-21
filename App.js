import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import ListItem from './src/components/ListItem/ListItem'
import PlaceList from './src/components/PlaceList/PlaceList';

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

  onDeletedHandler = (index) => {
    this.setState(prevState => {
      return{
        places: prevState.places.filter((place, i) => {
            return i !== index
        })
      }
    })
  }

    // [1,2,3,4]
  // 4
  // [1,2,3]

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onSubmitHandler = {this.placeSubmitHandler}/>
        <PlaceList 
          places = {this.state.places}
          onDeletedHandler ={this.onDeletedHandler}
        />        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 26
    }
})