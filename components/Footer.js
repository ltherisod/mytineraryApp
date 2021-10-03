import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

const Footer = () => {
    return(

            <ImageBackground style={styles.footerBack} source={require('../assets/footerbanner.jpg')} resizeMode="cover">
                <Text style={styles.logoFooter} >Mytinerary</Text>
                <View style={styles.iconsFooter}>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-facebook-nuevo-96.png')} resizeMode="contain"/>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-instagram-96.png')} resizeMode="contain"/>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-twitter-cuadrado-96.png')} resizeMode="contain"/>
                </View>
                <Text style={styles.copyFooter} >Copyright &copy; Laura Therisod | MindHub | 2021 </Text>
            </ImageBackground>
    
    )
}

const styles = StyleSheet.create({
    footerBack:{
        width:"100%",
        height:300,
        justifyContent:"space-between"
    },
    logoFooter:{
        color:"white",
        alignSelf:"center",
        fontFamily:"Italianno_400Regular",
        fontSize:45,
        padding:10,
        marginVertical:10
    },
    copyFooter:{
       textAlign:"center",
       color:"white",
       paddingVertical:10
    },
    footerIcon:{
        width:30
    },
    iconsFooter:{
        alignSelf:"center",
        width:"70%",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})

export default Footer