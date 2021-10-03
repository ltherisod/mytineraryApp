import React,{useState, useEffect } from "react"
import { View, Text, StyleSheet, Image, Pressable, Alert, ToastAndroid } from "react-native"
import {connect} from "react-redux"
import Ioicons from 'react-native-vector-icons/Ionicons'



const Comment =(props)=>{
    const{deleteComment} = props
    const [shown, setShown] = useState (false)
    const allowComment = props.newComment.userId._id === props._id

    useEffect(()=>{
        setShown(false)
    },[props.render])


    const confirm = () => {
        Alert.alert("Are you sure?", "You are going to delete this comment",
        [{text: "Yes", onPress: ()=> {deleteComment(props.itinerary_id,props.token,props.newComment._id); ToastAndroid.showWithGravityAndOffset(' Comment deleted 👌', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 60)}},
        {text: "No"}]
        )
    }
    
    const commentShown =
                        <View>
                            {!shown &&<Text>{props.newComment.comment}</Text>}
                        </View>

    const commentToRender = allowComment ? commentShown : <Text>{props.newComment.comment}</Text>
    

    return(
        <View style={{flexDirection:'row'}}>
            <Image source={{ uri: props.newComment.userId.profilePhoto }} style={styles.userPhoto}/>
            <View style={styles.commentBacol}>
                    <View >
                        <Text style={{color:'#615f5f', fontWeight:'bold', marginHorizontal:5}}>{props.newComment.userId.firstName}:</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        {commentToRender}
                        {allowComment &&
                        <Pressable onPress={confirm}>
                            <Ioicons name="trash" style={{ fontSize: 16, color: "#999696", marginLeft: 10}} />
                        </Pressable>}
                    </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    commentBacol:{
        backgroundColor: '#e9e9eb',
        borderRadius:15,
        marginVertical:5,
        flexDirection:'row',
        padding:5,
        minWidth:'30%',
        alignItems:'center'
    },
    userPhoto:{
        height: 40,
        width: 40,
        borderRadius: 100,
        margin:7
    }

})

const mapStateToProps = (state) => {
    return{
        token:state.users.token,
        _id: state.users._id
    }

}

export default connect (mapStateToProps)(Comment)