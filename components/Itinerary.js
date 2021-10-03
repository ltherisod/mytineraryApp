import React,{useState} from "react"
import {connect} from 'react-redux'
import itinerariesActions from "../redux/actions/itinerariesActions"
import Icon from 'react-native-vector-icons/FontAwesome'
import Ioicons from 'react-native-vector-icons/Ionicons'
import {Text, View, StyleSheet, Alert, Image, ScrollView, Pressable, TextInput, ToastAndroid } from 'react-native'
import { Button } from 'react-native-elements'
import Activity from "./Activity"
import Comments from "./Comments"

const Itinerary = (props) =>{
    const {authorName, authorPhoto, src, hashtags, title, price, likes, description, time, _id, comments} = props.data
    const [likeIcon, setLikeIcon] = useState(true)
    const [itinerariesLikes, setItinerariesLikes] = useState(likes)
    const [showActivities, setShowActivities]= useState([])
    const [button, setButton] = useState(false)

    const liked= itinerariesLikes.includes(props._id) ? <Icon name='heart' style={styles.iconoLikes}/> : <Icon name='heart-o' style={styles.iconoLikes} /> 

    const likeItinerary = async ()=>{
        setLikeIcon(false)
        if(!props.token){
            ToastAndroid.showWithGravityAndOffset('⛔ You must be logged in to like this post', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
            60)
        }else{
            let response = await props.likeItinerary(_id, props.token)
            setItinerariesLikes(response.data.response)
        }
        setLikeIcon(true)
    }
    async function activityItinerary (){
        try{
            let response = await props.getActivitiesPerItinerary(_id)
            setShowActivities(response)
    
        }catch (error){
            console.log(error)
        }
    }

    const buttonHandler = () => {
        setButton(!button)
        if(!button  && !showActivities.length){
            activityItinerary()
        }
    
}

    return(
        <ScrollView>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <View style={styles.contenedorItineraries}>
                <View style={{  alignItems: 'center', marginVertical: 10, flexDirection:'row' }}>
                    <Image source={{uri:authorPhoto}} style={styles.authorImage} />
                    <Text style={{ color: '#999696', fontWeight: 'bold', fontSize: 25, marginLeft:5 }}>{authorName}</Text>
                </View>
                <Image source={{uri:src}} style={styles.itineraryImage}/>
                <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' , marginTop:10}}>
                                <Pressable onPress={(likeIcon ? likeItinerary : null )} >
                                {liked}
                                </Pressable> 
                                <Text style={{ color: '#999696', fontSize: 17, marginLeft: 6, fontWeight:'bold' }}>{itinerariesLikes.length}</Text> 
                            </View>
                    <View style={{ alignItems: 'center'}}>
                        <View>
                            <Text style={{ color: '#cfcfcf', fontWeight: 'bold', fontSize: 25 }}>{title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6, justifyContent:"space-around", width:"80%"}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Ioicons name="hourglass-outline" style={{ fontSize: 25, color: "#999696", marginLeft: 6 }} />
                            <Text style={{ color: '#999696', fontSize: 17 }}>{time} hours</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            {[...Array(price)].map((cash, index) => {
                                return <Icon name="money" style={{ fontSize: 25, color: "rgb(8, 184, 8)", marginLeft:5 }} key={index} />
                            })}
                        </View>
                        
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical:10 }}>{hashtags.map((hashtag, index) => <Text key={index} style={{ color: '#2ad7dd73', fontSize: 17, marginRight: 10, marginVertical:10 }}>#{hashtag}</Text>)}</View> 
                    </View>
                </View>
            
            <View>
                    <View style={{display:button ? 'flex' : 'none'}}>
                        <View>
                            <Text style={styles.activityTitle}>LET'S EXPLORE </Text>
                            <View style={styles.deco}></View>
                        </View>
                        <View>
                            <Activity activities={showActivities}/>
                            <Comments itineraryId={_id} itineraryComments={comments}/>
                        </View>
                    </View>      
            </View>              
            <View>
                <Button buttonStyle={styles.btnView} onPress={buttonHandler} title={button ? "View Less" : "View More"} />
            </View>
        </View>   
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedorItineraries: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '95%',
        justifyContent: 'center',
        padding: 15,
    },
    itineraryImage: {
        width: '100%',
        height: 200,
        borderRadius:15
    },
    authorImage: {
        minWidth: 55,
        height: 57,
        borderRadius: 50
    },
    iconoLikes: {
        fontSize: 20,
        color: 'red'
    },
    btnView: {
        alignSelf:'center',
        width:100,
        backgroundColor: 'black',
        height: 40,
    },
    deco :{
        marginTop:-8,
        marginLeft:9,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
        marginBottom:20
    },
    activityTitle:{
        alignSelf:"flex-start",
        padding:5,
        color:"#dad8d8",
        fontSize:28,
        fontFamily:"Ubuntu_700Bold"
    }
})

const mapStateToProps = (state) => {
    return{
        token:state.users.token,
        _id: state.users._id
    }
}
const mapDispatchToProps ={
    likeItinerary:  itinerariesActions.likeItinerary,
    getActivitiesPerItinerary: itinerariesActions.getActivitiesPerItinerary
}    

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 