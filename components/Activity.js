import { connect } from 'react-redux'
import itinerariesActions from "../redux/actions/itinerariesActions"
import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const Activity = (props) => {
    const {activities} = props
    const renderItem = ({ item }) => {
        return (
            <View  style={styles.slide} >
                <ImageBackground source={ {uri: item.photo} } style={styles.image} imageStyle={{borderRadius:15}} >
                    <Text style={styles.cityName}>{item.name}</Text>
                </ImageBackground>
            </View >
        )
    }   
    return (
        <View style={styles.containerCarrusel}>
        <Carousel
            data={activities}
            sliderWidth={900}
            itemWidth={450}
            renderItem={renderItem}
            layout={"default"}
            loop={true}
            autoplay={true}
        />

    </View>
    )
}

const styles = StyleSheet.create({

    image: {
        alignSelf:"center",
        resizeMode:"cover",
        justifyContent: "flex-end",
        height: 200,
        width: 300,
    },
    cityName: {
        color: "whitesmoke",
        fontSize: 30,
        fontFamily:"ZillaSlabHighlight_700Bold",
        textAlign:"center",
        textShadowColor: '#000', 
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5,
        marginBottom:7,
    },
    containerCarrusel: {
        width:"100%",
        marginBottom: 20,
        alignItems:"center",
        justifyContent:"center",
    },
    slide:{
        width:"100%"
    },
   


})
const mapDispatchToProps = {
    getActivitiesPerItinerary: itinerariesActions.getActivitiesPerItinerary
}

export default connect(null, mapDispatchToProps)(Activity)