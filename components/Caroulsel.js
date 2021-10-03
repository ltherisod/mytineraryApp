import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const Caroulsel = () => {
    const city =[ {
        src: require('../assets/Cities/chileatacama.jpg'),
        id: 'chile',
        name: 'Atacama',
      },
      {
        src: require('../assets/Cities/CapeTown.jpg'),
        id: 'southAfrica',
        name: 'Cape Town'
      },
      {
        src: require('../assets/Cities/DarwinAustralia.jpg'),
        id: 'australia',
        name: 'Darwin'
      },
      {
        src: require('../assets/Cities/HuayinWeinánChina.jpg'),
        id: 'china',
        name: 'Huayin',
      },
      
       {
        src: require('../assets/Cities/AucklandNewZeland.jpg'),
        id: 'newzeland',
        name: 'Auckland',
      },
      {
        src: require('../assets/Cities/BavariaGermany.jpg'),
        id: 'germany',
        name: 'Bavaria'
      },
      {
        src: require('../assets/Cities/PhilippinesCoron.jpg'),
        id: 'philippines',
        name: 'Coron'
      },
      {
        src: require('../assets/Cities/ShintoJapan.jpg'),
        id: 'shinto',
        name: 'Shinto',
      },
       {
        src: require('../assets/Cities/SukhothaiThailand.jpg'),
        id: 'thailand',
        name: 'Sukhothain',
      },
      {
        src: require('../assets/Cities/TulumMexico.jpg'),
        id: 'mexico',
        name: 'Tulum'
      },
      {
        src: require('../assets/Cities/VolcanThrihnukagigur.jpg'),
        id: 'island',
        name: 'Hafnarfjordur'
      },
      {
        src: require('../assets/Cities/ChaltenArgentinajpg.jpg'),
        id: 'argentina',
        name: 'El Chalten',
      },
      ]

      const renderItem = ({ item }) => {
        return (
            < View key={item.id} style={styles.slide} >
                <ImageBackground source={ item.src } style={styles.image} imageStyle={{borderRadius:15}} >
                    <Text style={styles.cityName}>{item.name}</Text>
                </ImageBackground>
            </View >
        )
    }

    return(
        <View style={styles.containerCarrusel}>
        <Text style={styles.carouselTitles}>POPULAR MYTINERARIES</Text>
        <View style={styles.deco}></View>
        <Carousel
            data={city}
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
        justifyContent: "center",
        height: 400,
        width: 300,
    },
    cityName: {
        color: "whitesmoke",
        fontSize: 42,
        fontFamily:"ZillaSlabHighlight_700Bold",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        textShadowColor: '#000', 
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5
    },
    containerCarrusel: {
        width:"100%",
        marginBottom: 20,
        marginTop: 20,
        alignItems:"center",
        justifyContent:"center",
    },
    slide:{
        width:"100%"
    },
    carouselTitles:{
        alignSelf:"flex-start",
        padding:10,
        color:"#dad8d8",
        fontSize:35,
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
    }


})

export default Caroulsel