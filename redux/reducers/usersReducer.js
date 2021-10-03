import AsyncStorage from "@react-native-async-storage/async-storage"

const usersReducer = (state= {token:null, firstName:null, profilePhoto:null, _id:null}, action) => {
    switch (action.type){
        case "LOG_USER" :
            console.log("entrealreducerloguser")
            return {
                ...state,
                token: action.payload.token,
                firstName:action.payload.firstName,
                profilePhoto: action.payload.profilePhoto,
                _id:action.payload._id
            }
        case "LOG_OUT_USER" :
            const deleteStorage = async () =>{
                  return  await AsyncStorage.removeItem('token')
            }
            deleteStorage()
            return{
                token:null,
                firstName:null,
                profilePhoto:null,
                _id:null
            }
    default: 
    return state    
    }
}

export default usersReducer 