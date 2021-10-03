const citiesReducer = (state={allCities:[], searchedCities:[], newCity:{}},action) => {
    switch(action.type){
        case "GET_ALL_CITIES":
            return {
            ...state,
            allCities: action.payload,
            searchedCities:action.payload,
            newCity : action.payload
        } 
        case "FILTER_CITIES":
            let filtered= state.allCities.filter(city => city.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return{
                ...state,
                searchedCities: filtered
            }
        case "GET_ONE_CITY":
            let oneCity= state.allCities.find(city => city._id === action.payload)
            return{
                ...state,
                newCity: oneCity
            }
      default: 
         return state
    } 
  
}

    

export default citiesReducer 