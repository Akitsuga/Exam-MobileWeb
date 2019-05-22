import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux'

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index'

class App extends Component{
  state = {
    places: [],
    selectedPlace: null
  }

  placeSubmitHandler = placeName => {
    if(placeName.trim() === ""){ // "   Alvin    " "Alvin" || "      " ""
      return // berhenti
    }
    this.props.onAddPlace(placeName)
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key)
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  modalCloseHandler = () => {
    this.props.onDeselectPlace()
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          modalClosed = {this.modalCloseHandler}
          onDeletedItem = {this.placeDeletedHandler}
          selectedPlace = {this.props.selectedPlace}
        />
        <PlaceInput onAddPlace = {this.placeSubmitHandler}/>
        <PlaceList 
          places = {this.props.places}
          onItemSelected = {this.placeSelectedHandler}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App) 