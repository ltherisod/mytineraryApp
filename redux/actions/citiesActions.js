import axios from "axios"
const citiesActions = {
    
 getCities : () => {
    return async (dispatch, getState) => {
        let response = await axios.get('https://mytinerarytherisod.herokuapp.com/api/citiesData')

        if(!response.data.success){
            throw new Error ('Backend-Data Base problems')
        }
        dispatch({type:'GET_ALL_CITIES', payload:response.data.response}) 
    }
 },
 filterCities: (e) => {
     return (dispatch, getState) => {
         dispatch ({type: 'FILTER_CITIES', payload:e})
     }
 },
 getOneCity: (id) => {
     return(dispatch, getState) => {
         dispatch ({type: 'GET_ONE_CITY', payload: id})
     }
 }
}

export default citiesActions 