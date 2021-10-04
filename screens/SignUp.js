import { ImageBackground, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid } from "react-native"
import SelectDropdown from 'react-native-select-dropdown'
import React, {useState } from "react"
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const SignUp = (props) => {
    const countries = ["Egypt", "Canada", "Australia", "Ireland", "Argentina", "Colombia", "Peru","United States", "Chile", "China", "Japan", "Pakistan", "Colombia", "Uruguay", "Cuba",  ]
    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', profilePhoto: '', country: '' })
    

console.log(newUser)
    const sendFormHandler = async () => {
        if (newUser.email === '' || newUser.password === '' || newUser.firstName === '' || newUser.lastName ==='', newUser.profilePhoto === '', newUser.country === '') {
            ToastAndroid.showWithGravityAndOffset('⚠️ All fields must be completed', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
            60)
        }else{
            try{
                let response = await props.signUpUser(newUser)
                console.log(response)
                if(response.data.success){
                    props.navigation.navigate('home')
                     ToastAndroid.showWithGravityAndOffset('Welcome Adventurer 👋!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
            60)
                }else if (response.data.errors){ 
                    let errors= response.data.errors
                    errors.map(error => ToastAndroid.showWithGravityAndOffset('⚠️' +  error.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
                        60))
                    }else{
                        ToastAndroid.showWithGravityAndOffset('This email is already in use', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25,
                            60)
                    }
                     
            }catch(error){
                console.log(error)
            }   
        }
               
           
    }

    return(
        <ScrollView>
           <ImageBackground style={styles.signUpBack} source={require('../assets/signIn4.png')} resizeMode="cover">
                <Text style={styles.signUpTitle}>Hello Adventurer!</Text>
                <View style={styles.deco}></View>
                <View style={styles.inputConteiner}>
                    <TextInput style={styles.input} placeholder="First Name" onChange={(e) => setNewUser({...newUser, firstName:e.nativeEvent.text})}/>
                    <TextInput style={styles.input} placeholder="Last Name" onChange={(e) => setNewUser({...newUser, lastName:e.nativeEvent.text})}/>
                    <TextInput style={styles.input} placeholder="Email" onChange={(e) => setNewUser({...newUser, email:e.nativeEvent.text})}/>
                    <TextInput style={styles.input} placeholder="Picture Url" onChange={(e) => setNewUser({...newUser, profilePhoto:e.nativeEvent.text})}/>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChange={(e) => setNewUser({...newUser, password:e.nativeEvent.text})}/>
                    <SelectDropdown style={styles.inputSelect} data={countries} defaultButtonText={"Select your country"} buttonStyle={styles.dropdown1BtnStyle}  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={() => {
                      return (
                        <FontAwesome name="chevron-down" color={"black"} size={15} />
                      )
                    }}
                    dropdownIconPosition={"right"} onSelect={(selectedItem) => setNewUser({...newUser, country:selectedItem})} buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}} rowTextForSelection={(item, index) => {return item}} onValueChange={(e) => userHandler(e, "country")}/>
                    <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={sendFormHandler}> 
                         <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSignIn} activeOpacity={.7} onPress={() => props.navigation.navigate('SignIn')}>
                        <Text style={styles.textSignIn}>Already a member? Sign In here</Text>
                    </TouchableOpacity >
                </View>
           </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    signUpBack:{
        width:"100%",
        height:900,
        alignItems:"center"
    },
    input: {
        height: 40,
        width: 260,
        margin: 9,
        padding: 10,
        borderRadius: 2,
        borderColor: "#dad8d8",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10

    },
    signUpTitle:{
        marginTop:50,
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
    },
    dropdown1BtnStyle:{
        height: 40,
        width: 260,
        margin: 9,
        padding: 10,
        borderRadius: 2,
        borderColor: "#dad8d8",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor:'white'
    }
    
})
const mapDispatchToProps = {
    signUpUser: userActions.signUpUser
}

export default connect(null, mapDispatchToProps)(SignUp)