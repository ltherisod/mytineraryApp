import React ,{ useEffect }from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList  } from '@react-navigation/drawer'
import {CitiesStack, HomeStack, SignInStack, SignUpStack} from './Stack'
import { StyleSheet, Text, View, Image, ImageBackground, ToastAndroid  } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import userActions from '../redux/actions/userActions'
const drawer = createDrawerNavigator()

const Navigator = (props) =>{
    const {signOutUser, token, firstName, profilePhoto} = props 
    console.log(props)
    useEffect(()=> {
        const asyncStore = async () => {
            let insideStorage = await AsyncStorage.getItem("token")
            if (insideStorage){
                const storage = await AsyncStorage.getItem("token")
            return await props.signInLS(storage)
            }
        }
        asyncStore()
    }, [])

    function LogoTitle() {
        return (
          <Image
            style={{ width: 80, height: 80, resizeMode:'contain' }}
            source={require('../assets/logo2.png')}
          />
        )
      }

    const CustomDrawerContent = (props) => {
        return (
                <ImageBackground source={require('../assets/drawerDeco.png')} style={styles.drawerCustom}>
                    <DrawerContentScrollView {...props}>
                         <View style={styles.containerUserFoto}>
                        {!token 
                            ? <Image style={{width:50, height:50}} source={require('../assets/userIcon.png')} />
                            : <Image style={styles.userProfile} source={{uri:profilePhoto}}/>}
                         {token
                          ? <Text style={styles.nameUser}>Welcome {firstName}</Text>
                          : <Text style={styles.nameUser}>Hello there</Text>}
                        </View>
                        <DrawerItemList {...props} />
                         {token && <DrawerItem label="Sign Out" onPress={() => { signOutUser(); props.navigation.navigate('Home') }} labelStyle={{fontFamily:"Ubuntu_700Bold"}} activeBackgroundColor='#3fced341' activeTintColor='#2ab6bb'  />}
                    </DrawerContentScrollView>
                </ImageBackground>
                
        )
    }

    
    return(
        
        <drawer.Navigator  drawerContent={props => <CustomDrawerContent {...props} />} screenOptions={{drawerLabelStyle:{fontFamily:"Ubuntu_700Bold"}, drawerActiveBackgroundColor:'#3fced341', drawerActiveTintColor:'#2ab6bb'}}>
                <drawer.Screen  name="Home" component={HomeStack} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
                <drawer.Screen name="Cities" component={CitiesStack} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
               {!props.token && <drawer.Screen name="SignIn" component={SignInStack} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>} 
               {!props.token && <drawer.Screen name="SignUp" component={SignUpStack} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>}
        </drawer.Navigator>
       
    )
}

const styles = StyleSheet.create({
    nameUser: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    containerUserFoto: {
        alignItems: 'center'
    },
    drawerCustom:{
        flex:1,
        marginTop:15,
    },
    userProfile:{
        minWidth: 55,
        height: 57,
        borderRadius: 50
    }


})

const mapStateToProps = (state) => {
    return{
        token: state.users.token,
        firstName: state.users.firstName,
        profilePhoto: state.users.profilePhoto
    }
}

const mapDispatchToProps = {
    signInLS: userActions.signInLS,
    signOutUser: userActions.signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
