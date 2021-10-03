import axios from "axios"
const itinerariesActions = {
    getItinerariesPerCity : (id) => {
        return async (dispatch, getState) => {
            let res = await axios.get(`https://mytinerarytherisod.herokuapp.com/api/itineraries/${id}`)
            if(!res.data.success){
                throw new Error ('Backend-Data Base problems')
            }
            dispatch ({ type:'GET_ITINERARIES_PER_CITY', payload:res.data.response})
        }
    },
    likeItinerary: (id, token) =>{
        return async () => {
                try{
                    let response = await axios.put(`https://mytinerarytherisod.herokuapp.com/api/itinerary/like/${id}`, {},{
                    headers:{
                        Authorization: 'Bearer '+token
                    }
                })
                return response
            
                }catch (error){
                    console.log(error)
                }
            
        }
    },
    getActivitiesPerItinerary : (id)=>{
        return async () => {
            try{
                let response = await axios.get(`https://mytinerarytherisod.herokuapp.com/api/activities/${id}`)
                if(response.data.success){
                    return response.data.response[0].activities
                }
            }catch(error){
                console.log(error)
            }
        }

    },
    addCommentPerItinerary:(id, comment, token)=>{
        return async () => {
                    try{
                        let response = await axios.put(`https://mytinerarytherisod.herokuapp.com/api/itinerary/comments/${id}`, {comment, type:"addComment"} ,{
                            headers : {
                                Authorization: 'Bearer '+token
                            }
                        })
                        return response.data.response
                    }catch (error){
                       console.log(error)
                    }
        }
    },
    editAComment:(id, comment, token ) => {
        return async () => {
            try{
                let response = await axios.put(`https://mytinerarytherisod.herokuapp.com/api/itinerary/comments/${id}`, {comment, type:"editComment"},{
                    headers : {
                        Authorization: 'Bearer '+token
                    }
                })
                console.log(response)
                if(response.data.success) return {success:true, res:response.data.response}
            }catch (error){
                console.log(error)
            }
        }
    },
    deleteAComment:(id, token, commentId ) => {
      
        return async () => {
            try{
                let response = await axios.put(`https://mytinerarytherisod.herokuapp.com/api/itinerary/comments/${id}`, {commentId, type:"deleteComment"}, {
                    headers : {
                        Authorization: 'Bearer '+token
                    }
                })
                if(response.data.success){
                    return response.data
                }
            }catch (error){
                console.log(error)
            }
        }
    }
}

export default itinerariesActions