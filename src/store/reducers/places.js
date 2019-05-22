import { 
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE
} from '../actions/actionTypes'

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    value: action.placeName,
                    image: {
                        uri: 'https://res.cloudinary.com/teepublic/image/private/s--ZuSXviSZ--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1519368586/production/designs/2388108_0.jpg'
                    }
                })
            }

        case DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key
                })
            }

        default:
            return state
    }
}

export default reducer