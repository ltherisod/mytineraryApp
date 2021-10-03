import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Cards = ()  => {
    return(
        <View style={styles.cardsContainer}>
        <Text style={styles.cardTitles}>ESCAPE WITH US</Text>
        <View style={styles.deco}></View>
        <View style={styles.card}>
            <Image style={styles.logo} source={require('../assets/logocard1.png')} resizeMode="contain"/>
            <Text  style={styles.descrip}>No matter where do you want to go, we can help  you there.</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.logo} source={require('../assets/logocard2.png')} resizeMode="contain"/>
            <Text style={styles.descrip}>We maximize your vacation experience just in the right way.</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.logo} source={require('../assets/logocard3.png')} resizeMode="contain"/>
            <Text style={styles.descrip}>Every Mountain top is within reach if you just keep climbing.</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardsContainer:{
        width:"100%",
        alignItems:"center"

    },
    cardTitles:{
        marginTop:30,
        padding:10,
        alignSelf:"flex-start",
        color:"#dad8d8",
        fontSize:35,
        fontFamily:"Ubuntu_700Bold"
    },
    card:{
        backgroundColor:"whitesmoke",
        alignSelf:"center",
        alignContent:"center",
        width:"90%",
        marginTop: 20,
        borderRadius:20
    },
    logo:{
        alignSelf:"center",
        width:"50%",
    },
    deco :{
        marginTop:-8,
        marginLeft:14,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
    },
    descrip:{
        marginTop:-80,
        fontWeight:"bold",
        color:"rgb(100, 99, 99)",
        fontSize:30,
        textAlign:"center",
        padding:30
    }

})

export default Cards