import { StyleSheet, Text, View, TextInput, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from '../redux/actions/itinerariesActions'
import Itinerary from '../components/Itinerary'
import Footer from '../components/Footer'

const City = (props) => {
    useEffect(()=> {
        let listener = props.navigation.addListener('focus', ()=> {
            props.getOneCity(props.route.params.id)
            props.getItinerariesPerCity(props.route.params.id)
        })
       return()=>{
           props.navigation.removeListener(listener)
       }
    }, [])
    const itineraryCards =props.itineraries.length === 0 
    ?  <ImageBackground style={styles.noItineraries} source={require('../assets/backNo.png')} resizeMode="cover"><Text style={{color:'#999696', fontFamily:'Ubuntu_700Bold', fontSize:20, textAlign:'center', marginTop:5}}>Oh no!</Text><Text style={{color:'#999696', fontFamily:'Ubuntu_700Bold', fontSize:20, textAlign:'center'}}> We don't have any itineraries yet!</Text></ImageBackground>
    : props.itineraries.map((itineraryData) =><Itinerary data={itineraryData} key={itineraryData._id}/>)
    return(
        <ScrollView>
        <ImageBackground style={styles.containerCity} source={{ uri:`https://mytinerarytherisod.herokuapp.com${props.city.background}`}}>
                <Text style={styles.welcomeCity}>
                    Welcome to {props.city.name}
                </Text>
        </ImageBackground>
        <Text style={styles.joinText}>Join us in this wonderfull adventure</Text>
        <View style={styles.deco}></View>
       {itineraryCards}
       <Footer/>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerCity:{
        width:"100%",
        height:300,
        resizeMode:"cover",
        justifyContent:"center",
        alignItems:"center"

    },
    welcomeCity:{
        textAlign:"center",
        color:"whitesmoke",
        fontSize: 35,
        textAlign: "center",
        fontFamily: 'ZillaSlabHighlight_700Bold',
        textShadowColor: '#000', 
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5
    },
    joinText:{
        alignSelf:"flex-start",
        padding:15,
        color:"#dad8d8",
        fontSize:28,
        fontFamily:"Ubuntu_700Bold"
    },
    deco :{
        marginTop:-8,
        marginLeft:14,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
        marginBottom:30
    },
   
    noItineraries:{
        alignSelf:'center',
        width:'100%',
        height:250,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginTop: 20,
        backgroundColor: 'black',
        width: 150,
        height: 50,
        zIndex: 1
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    


})

const mapStateToProps = state => {
    return{
        city: state.cities.newCity,
        cities: state.cities.allCities,
        itineraries: state.itineraries.itinerariesPerCity
    }
}
const mapDispatchToProps = {
    getOneCity:citiesActions.getOneCity,
    getItinerariesPerCity: itinerariesActions.getItinerariesPerCity 
}

export default connect(mapStateToProps, mapDispatchToProps)(City)