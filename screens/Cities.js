import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from "react-native"
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesActions"
import CardCity from '../components/CardCity'
import NotFound from '../components/NotFound'
import { useEffect, useState } from "react"
import Footer from '../components/Footer'

const Cities = (props) => {
    const [loader, setLoader] = useState (true)
     useEffect (() => {
        async function getAllCities(){
            try{
                await props.getAllCities()
                setLoader(false)
            }catch (error){
                console.log(error)
                return false
            }
        }
        let listener = props.navigation.addListener('focus', ()=> { getAllCities() })
        return () =>{
            props.navigation.removeListener(listener)
        }
    },[])
    if(loader){
        return(
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image style={{width:50, height:50, alignSelf:'center'}} source={require('../assets/sky-2-unscreen.gif')}/> 
                </View>
        
        )}

    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <Image style={styles.citiesHeader} source={require('../assets/lighthouse.jpg')} resizeMode="cover"/>
            <Text style={styles.citiesTitles}>FIND YOUR NEW ADVENTURE!</Text>
            <View style={styles.deco}></View>
            <TextInput placeholder="Search your destination..."  style={styles.input}  onChange={(e)=>props.filterCities(e.nativeEvent.text)}/>
            <View style={styles.citiesContainer}>
                {props.cities.length === 0
                    ?  <NotFound/>
                    : props.cities.map(cityData => <CardCity style={styles.cards}city={cityData} key={cityData._id} navigation={props.navigation}/>)
                }
            </View>
            <Footer/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    citiesHeader:{
        width:"100%",
        height:300
    },
    citiesTitles:{
        padding:5,
        alignSelf:"flex-start",
        color:"#dad8d8",
        fontSize:29,
        fontFamily:"Ubuntu_700Bold",
    },
    deco :{
        marginTop:-8,
        marginLeft:14,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
    },
    input: {
        alignSelf:"center",
        height: 40,
        width: 330,
        margin: 9,
        padding: 10,
        borderWidth:2,
        borderRadius: 6,
        borderColor: "#dad8d8",
        borderStyle: "solid",
    },
    citiesContainer:{
        width:"100%",
        alignItems:"center"

     
    },

})

const mapStateToProps = state => {
    return{
        cities: state.cities.searchedCities
    }
}

const mapDispatchToProps = {
 getAllCities : citiesActions.getCities,
 filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
