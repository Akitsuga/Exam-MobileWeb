import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux'

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

import { addPlace, deletePlace } from './src/store/actions/index'

class App extends Component{
  state = {
    places: [],
    selectedPlace: null
  }

  placeSubmitHandler = placeName => {
    if(placeName.trim() === ""){ // "   Alvin    " "Alvin" || "      " ""
      return // berhenti
    }
    console.log(placeName);

    this.props.onAddPlace(placeName)
  }

  placeSelectedHandler = (key) => {
    this.setState (prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
            return place.key === key
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return{
        places: prevState.places.filter(place => {
            return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    })
  }

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          modalClosed = {this.modalCloseHandler}
          onDeletedItem = {this.placeDeletedHandler}
          selectedPlace = {this.state.selectedPlace}
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
    onAddPlace : (name) => dispatch(addPlace(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(App) 