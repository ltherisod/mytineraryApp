import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers ({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: usersReducer
})

export default rootReducer