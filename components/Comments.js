import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import React,{useState} from "react"
import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput, ScrollView,ToastAndroid } from 'react-native'
import Ioicons from 'react-native-vector-icons/Ionicons'
import Comment from "./Comment"

const Comments = (props) => {
    const{itineraryComments, itineraryId}=props
    const [renderComments, setRenderComments]= useState(false)
    const [allComments, setAllComments] = useState(itineraryComments)
    const [valueComment, setValueComment] = useState('')
    const [verify, setVerify] = useState(false)

    const sendComment =  () => {
        setVerify(true)
        props.addCommentPerItinerary(itineraryId, valueComment, props.token)
        .then((res)=> {
            if(props.token){
                setAllComments(res)
                setValueComment('')
                setVerify(false)
            }else{
                ToastAndroid.showWithGravityAndOffset('⛔You must be logged in to comment this post', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
            60)
            }
           
        })
        .catch((error) => console.log(error))
     }

    const eraseComment=(itineraryId, token,commentId)=>{
        props.deleteAComment(itineraryId, token, commentId)
        .then((res) =>{
            if(res.success){
                setAllComments(allComments.filter(comment => comment._id !== commentId))
            }else{
                throw new Error()
            }
        })
        .catch((error) => console.log(error))
     }

    //  const editComment = (commentId, comment, token) => {
    //      props.editAComment(commentId, comment, token)
    //      .then((res) => {
    //          if(res.success){
    //             allComments.forEach((editComment) =>{
    //                 if(editComment._id === commentId){
    //                     editComment.comment = comment
    //                 }
    //             })
    //             setAllComments(allComments)
    //             setRenderComments(!renderComments)
    //          }
             
    //      })
    //      .catch((error) => console.log(error))
    //  }

    


return(
    <View>
            <View>
                <Text style={styles.commentTitle}>Comments</Text>
            </View>
                <ImageBackground source={require('../assets/commentBack2.png')} style={{width:'100%',height:200}} ResizeMode='contain'>
                    <ScrollView>
                    {allComments.map(comment => {
                            return (
                                <Comment key={comment._id} newComment={comment} itinerary_id={itineraryId} deleteComment={eraseComment} />
                            )
                        })}
                    </ScrollView>  
                </ImageBackground> 
            <View style={{flexDirection:'row', alignItems:'center'}}>
                 <TextInput style={styles.inputComment}onChange={((e)=> setValueComment(e.nativeEvent.text))} placeholder={!props.token ? "You must be logged in to comment" : 'Leave a comment...'} value={!verify ? valueComment : ''}/>
                <Pressable onPress={sendComment}>
                <Ioicons name="send" style={{ fontSize: 25, color: "#999696", marginLeft: 6}} />
                </Pressable> 
            </View>
    </View>
)
}

const styles = StyleSheet.create({
    inputComment:{
        alignSelf:"center",
        height: 35,
        width: 260,
        margin: 9,
        padding: 11,
        borderWidth:2,
        borderRadius: 6,
        borderColor: "#dad8d8",
        borderStyle: "solid",
    },
    commentTitle:{
        alignSelf:"center",
        color:"#dad8d8",
        fontSize:30,
        fontFamily:"Ubuntu_700Bold"
    }
})

const mapStateToProps = (state) => {
    return{
        token:state.users.token


    }

}

const mapDispatchToProps = {
    addCommentPerItinerary: itinerariesActions.addCommentPerItinerary,
    deleteAComment:itinerariesActions.deleteAComment
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)