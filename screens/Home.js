import React from 'react'
import { ScrollView } from 'react-native'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Caroulsel from '../components/Caroulsel'
import Footer from '../components/Footer'

const Home = (props) =>{
    return(
        <ScrollView style={{backgroundColor:'white'}}>
              <Hero navigation={props.navigation}/>
              <Cards/>
              <Caroulsel/>
              <Footer/>
        </ScrollView>
    )
}

export default Home