import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

const LoginPage = () => {

    const [isCheckBox, setCheckBoxSelected] = useState(false)

    const OnClickCheckBox = () => {
        setCheckBoxSelected(!isCheckBox)
    }

    const OnClickLogin = () => {
        Alert.alert(
            'React Assignment',
            'Unable to login at the moment',
            { cancelable: false }
          );
    }

    return (
        <SafeAreaView>
            <ScrollView style={{ height: '100%' }}>

                {/* //1. Background */}
                <View style={style.background}>
                    {/* //2. Login Text */}
                    <Text style={style.loginStyle}>LOGIN</Text>
                    {/* //3. Email - Pass View */}
                    <View style={style.emailViewStyle}>
                        <Image source={require('../Images/ic_email.png')} style={style.leftEmailPassIconStyle} />
                        <TextInput placeholder="Email" style={style.entryStyle} />
                    </View>

                    <View style={style.emailViewStyle}>
                        <Image source={require('../Images/ic_password.png')} style={style.leftEmailPassIconStyle} />
                        <TextInput placeholder="Password" style={style.entryStyle} secureTextEntry={true} />
                    </View>

                    {/* //4. Remember me view */}
                    <TouchableOpacity style={style.viewRememberMe} onPress={OnClickCheckBox}>

                        <View style={[style.checkboxStyle, isCheckBox ? style.checkboxSelected : style.checkboxUnSelected]}>
                        </View>

                        <Text style={style.rememberMeStyle}>Remember me</Text>
                    </TouchableOpacity>

                    {/* //5. login view */}
                    <TouchableOpacity style = {style.loginViewStyle} onPress = {OnClickLogin}>
                        <Text style= {style.loginTextStyle}> LOGIN </Text>
                    </TouchableOpacity>

                    {/* //6. Or login view */}
                    <Text style = {style.orLoginStyle}> Or login with </Text>

                    {/* //7. Social Media View */}
                    <View style = {style.viewSocialMedia}>
                        <BoxSocialMediaView name="Facebook" iconPath = {require('../Images/ic_Fb.png')} style = {{marginRight : 10}}/>
                        <BoxSocialMediaView name="Google" iconPath = {require('../Images/ic_Google.png')} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const BoxSocialMediaView = (props) => {
    return (
        <View style = {style.boxSocialMedia}>
            <Image source = {props.iconPath} style = {{height : 20, width : 20, marginHorizontal : 5}}/>
            <Text style = {{color : '#737373', fontSize : 15}}> {props.name} </Text>
        </View>
    );
}

const style = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        height: "100%"
    },
    loginStyle: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        paddingTop: 60,
        marginBottom: 100
    },
    emailViewStyle: {
        backgroundColor: '#e7e7e7',
        height: 54,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30,
        borderRadius: 5,
        flexDirection: 'row',
        overflow: 'hidden'
    },
    leftEmailPassIconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
        height: 20,
        width: 25
    },
    entryStyle: {
        marginHorizontal: 5,
        fontSize: 18,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#737373',
        flex: 1,
        flexWrap: 'wrap'
    },
    viewRememberMe: {
        flexDirection: 'row',
        marginTop: -5,
        marginLeft: 40,
        overflow: 'hidden'
    },
    checkboxStyle: {
        height: 20,
        width: 20,
        borderRadius: 5,
        borderColor: '#d3408d',
        backgroundColor: 'white',
        borderWidth: 1,
        alignSelf: 'center'
    },
    rememberMeStyle: {
        alignSelf: 'center',
        marginHorizontal: 10,
        color : '#737373'
    },
    checkboxSelected : {
        backgroundColor : '#d3408d'
    },
    checkboxUnSelected : {
        backgroundColor : 'white'
    },
    loginViewStyle : {
        backgroundColor : '#d3408d',
        height: 64,
        marginLeft: 40,
        marginRight: 40,
        marginTop : 20,
        borderRadius: 5
    },
    loginTextStyle : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
        alignSelf : 'center',
        marginTop : 20
    },
    orLoginStyle : {
        color: '#737373',
        justifyContent : 'center',
        fontSize : 18,
        alignItems : 'center',
        marginLeft: 40,
        marginRight: 40,  
        marginTop : 50,
        textAlign : 'center'     
    },

    viewSocialMedia : {
        marginLeft: 40,
        marginRight: 40,  
        marginTop : 30,
        height : 64,
        flexDirection : 'row',
    },
    boxSocialMedia : {
        borderColor : '#737373',
        borderWidth : 0.5,
        borderRadius : 5,
        flex : 0.5,
        flexDirection : 'row',
        justifyContent : 'center',
        alignSelf: 'center',
        alignItems : 'center',
        padding : 10,
        marginRight : 10
    }
})
export default LoginPage;