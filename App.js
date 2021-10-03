import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { StyleSheet, Text, View } from 'react-native'
import {useFonts, Italianno_400Regular } from '@expo-google-fonts/italianno'
import { ZillaSlabHighlight_700Bold } from '@expo-google-fonts/zilla-slab-highlight'
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './navigation/Drawer'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'




const App =() => {
  const globalStore = createStore(rootReducer, applyMiddleware(thunk))
  let [fontsLoaded] = useFonts({
    Italianno_400Regular,
    ZillaSlabHighlight_700Bold,
    Ubuntu_700Bold,
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
       <NavigationContainer>
         <Provider store={globalStore}>
            <Navigator/>
          </Provider>
       </NavigationContainer>
  )
}
  }

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App