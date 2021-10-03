import { ImageBackground, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid } from "react-native"
import React,{useState} from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"

const SignIn = (props) => {
    const [logInUser, setLogInUser] = useState({ email: '', password: '' })

    const logInHandler = async () => {
        if (logInUser.email === '' || logInUser.password === '') {
            ToastAndroid.showWithGravityAndOffset('⚠️ All fields must be completed', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
            60)
        } else {
            try{
                let res= await props.signInUser(logInUser)
                if(!res.data.success){
                    ToastAndroid.showWithGravityAndOffset('⚠️ Invalid password or email', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
            60)
                }else{
                    ToastAndroid.showWithGravityAndOffset('Welcome Back 👋! ', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
                    60)
                }
            }catch (error){
               console.log(error)
                return false
               }
            
        }       
    }
    return(
        <ScrollView>
           <ImageBackground style={styles.signInBack} source={require('../assets/LogIn2.png')} resizeMode="cover">
                <Text style={styles.signInTitle}>Welcome back!</Text>
                <View style={styles.deco}></View>
                <View style={styles.textCont}>
                    <Text style={styles.signInText}>Log in adventurer</Text>
                    <Text style={styles.signInText}>Connect with Mytinerary's community.</Text>
                </View>
                <View style={styles.inputConteiner}>
                    <TextInput style={styles.input} placeholder="Email" onChange={(e) => setLogInUser({...logInUser, email:e.nativeEvent.text})}/>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Password"onChange={(e) => setLogInUser({...logInUser, password:e.nativeEvent.text})}/>
                    <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={logInHandler}> 
                         <Text style={styles.text}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSignIn} activeOpacity={.7} onPress={() => props.navigation.navigate('SignUp')}>
                        <Text style={styles.textSignIn}>Don't have an account? Sign up here</Text>
                    </TouchableOpacity >
                </View>
           </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    signInBack:{
        width:"100%",
        height:695,
        alignItems:"center"
    },
    input: {
        height: 45,
        width: 260,
        margin: 8,
        padding: 10,
        borderRadius: 2,
        borderColor: "#dad8d8",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10

    },
    signInTitle:{
        marginTop:60,
        padding:10,
        alignSelf:"flex-start",
        color:"#dad8d8",
        fontSize:35,
        fontFamily:"Ubuntu_700Bold",
        textAlign:"center"
    },
    deco :{
        marginTop:-8,
        marginLeft:14,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
    },

    inputConteiner:{
        alignItems:"center"
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginTop: 15,
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
    signInText:{
        padding:8,
        fontSize: 17,
        fontFamily:"Ubuntu_700Bold",
        color:"gray",
        textAlign:"center"
    },
    textCont:{
        marginVertical:10
    },
    buttonSignIn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "70%",
        height: 40,
        zIndex: 1,
    },
    textSignIn: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        color: 'grey'
    }

    
})
const mapStateToProps = (state) => {
    return{
        firstName: state.users.firstName,
    }
}

const mapDispatchToProps = {
    signInUser: userActions.signInUser
}

export default connect (mapStateToProps, mapDispatchToProps)(SignIn)