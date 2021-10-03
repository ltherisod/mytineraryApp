import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const NotFound = () => {
    return(
        <View style={styles.oops}>
            <Text style={{color:'#999696', fontFamily:'Ubuntu_700Bold', fontSize:20, textAlign:'center'}}>Oops! No results for your search.</Text>
            <Text style={{color:'#999696', fontFamily:'Ubuntu_700Bold', fontSize:20, textAlign:'center'}}> Try another city!</Text>
            <Image style={styles.oopsGif}  source={require('../assets/info.gif')}/>
        </View>
    )

}

const styles = StyleSheet.create({
    oops:{
        paddingTop:35,
        width:"100%",
        height:350,
        alignItems:"center"
    },
    oopsText:{
        textAlign:"center"
    },
    oopsGif:{
        width:"100%",
        height:200
    }
})

export default NotFound 