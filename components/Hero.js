import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'


const Hero = (props) => {
    return(
        <View>
            <ImageBackground source={require('../assets/heroTest.png')} style={styles.heroPhoto} resizeMode="cover">
                <View style={styles.heroText}>
                    <Text style={styles.title}>Mytinerary</Text>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Find your perfect trip,</Text>
                        <Text style={styles.subTitle}>designed by insiders who know and love their cities!</Text>
                    </View>
                </View>
                    <Button title="GET STARTED"  buttonStyle={styles.btnHero} onPress={() => props.navigation.navigate('Cities')}/>
            </ImageBackground>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
   heroPhoto:{
       width:"100%",
       height:700,
       justifyContent:"center",
       alignItems:"center"
   },
   heroText:{
        paddingBottom:80
   },
   title:{
       alignSelf:"center",
       fontFamily:"Italianno_400Regular",
       fontSize:85,
       padding:10
   },
   subTitle:{
       alignSelf:"center",
       color:"whitesmoke",
       fontFamily:"ZillaSlabHighlight_700Bold",
       fontSize:14
   },
   btnHero: {
    backgroundColor: "black",
    width: "35%",
    height: "28%",
    color: "white",
    alignSelf: "center",
    alignItems:"center",
    marginTop:20
},
subTitleContainer:{
    marginTop:20
}
})

export default Hero