import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { CommonActions } from '@react-navigation/native';

import {
    Image,
    ActivityIndicator,
    Text,
    SafeAreaView
} from 'react-native';

const SplashPage = ({navigation}) => {
    
    useEffect(() => {
        setTimeout(() => {
           // navigation.navigate('Login')
           navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Login' }
              ],
            })
          );
        }, 2000);
    }, []);
    
    return (        
        <SafeAreaView style = {style.container}>
        <Text style = {style.textStyle}>Welcome to the </Text>
        <Image source = {require('../Images/react-native.png')} style = {style.imageStyle}/>
        <Text style = {style.textStyle}>World </Text>
        
        <ActivityIndicator style = {style.activityStyle} size='large' color='#d3408d'/>
        </SafeAreaView>
        );
    }
    
    const style = {
        container: { 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor : 'white',
            flex : 1
        },
        
        textStyle : {
            textAlign : 'center',
            justifyContent: 'center',
            alignItems: 'center',
            color : 'black',
            fontSize : 40,
            marginBottom : 20,
            marginTop : 20
        },
        
        imageStyle : {
            justifyContent : 'center',
            alignItems : 'center',
            resizeMode: 'contain'
        }
        ,
        
        activityStyle : {
            position: 'absolute',
            bottom:64
            
        }
    }
    
    export default SplashPage;