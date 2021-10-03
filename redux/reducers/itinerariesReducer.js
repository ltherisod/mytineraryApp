const itinerariesReducer = (state={itinerariesPerCity:[]}, action) => {
    switch(action.type){
        case "GET_ITINERARIES_PER_CITY":
            return{
                ...state,
                itinerariesPerCity: action.payload
            }
      default:
          return state          
    }
}

export default itinerariesReducer 