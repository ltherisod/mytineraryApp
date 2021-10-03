import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'

const CardCity = (props) => {
     const{src, _id, name}=props.city

    return(
        <Pressable onPress={() => props.navigation.navigate('City', { id: _id })}>
        <ImageBackground style={styles.containerCity} source={{ uri:`https://mytinerarytherisod.herokuapp.com${src}`}} resizeMode="cover" imageStyle={{borderRadius:15}} >
            <Text style={styles.cityTitle}>{name}</Text>
        </ImageBackground>
    </Pressable>
    )
}

const styles = StyleSheet.create({
    containerCity:{
        width: 322,
        height: 350,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical:10,

    },
    cityTitle:{
        padding:10,
        color: "whitesmoke",
        fontSize: 38,
        textAlign: "center",
        fontFamily: 'ZillaSlabHighlight_700Bold',
        textShadowColor: '#000', 
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5
    },
    
})

export default CardCity