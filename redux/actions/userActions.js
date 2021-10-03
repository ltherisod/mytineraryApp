import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ToastAndroid} from 'react-native'

const userActions ={
    signUpUser : (newUser) => {
        return async (dispatch, getState) =>{
            try{
                let response = await axios.post('https://mytinerarytherisod.herokuapp.com/api/user/signup', newUser)
                if(response.data.success){
                    await AsyncStorage.setItem("token", response.data.response.token)
                    dispatch({type:"LOG_USER", payload: response.data.response})
                }
                return response
            }catch(error){
                console.log(error)
            }
        }
    },
    signInUser: (logInUser) => {
        return async (dispatch, getState) => {
            try{
                let response = await axios.post('https://mytinerarytherisod.herokuapp.com/api/user/signin', logInUser)
                if(response.data.success){
                    await AsyncStorage.setItem('token', response.data.response.token)
                    dispatch({type:"LOG_USER", payload: response.data.response})
                }
                return response
            }catch(error){
                console.log(error)
            }
           
        }
    },
    signOutUser : () => {
        return(dispatch, getState) => {
            dispatch({type:"LOG_OUT_USER"})
            ToastAndroid.showWithGravityAndOffset('See you Soon 👋! ', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25,60)
        }
    },
    signInLS :  (token) =>{
        return async (dispatch, getState) => {
            try{
                let response = await axios.get('https://mytinerarytherisod.herokuapp.com/api/verifyToken', {
            headers: {
                Authorization: 'Bearer '+ token,
            }
        })
            dispatch({type:"LOG_USER", payload:{token, firstName:response.data.firstName, profilePhoto: response.data.profilePhoto, _id:response.data._id}})
            }catch(error) {
               return  dispatch({type:'LOG_OUT_USER' })
            }
        }
    }
}

export default userActions