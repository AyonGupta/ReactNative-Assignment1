import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export class WelcomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={style.container}>
          <Text style={style.textstyle}>Welcome Screen</Text>

          <View style={style.signincontainer}>
            <View style={style.namecontainer}>
              <Text style={style.nametextcontainer}>UserName :</Text>
              <TextInput style={style.textinputcontainer}></TextInput>
            </View>

            <View style={style.namecontainer}>
              <Text style={style.nametextcontainer}>Password :</Text>
              <TextInput style={style.textinputcontainer}></TextInput>
            </View>
          </View>


          <TouchableOpacity style={{alignSelf:'flex-end'}}>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginEnd: 10,
              marginTop: 5,
              fontSize: 20,
            }}>
            Forgot Password ?
          </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={style.appButtonContainer}>
            <Text >LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={style.appButtonContainer}>
            <Text >SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop:30,
  },
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  signincontainer: {
    borderColor: 'maroon',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    marginTop: 30,
  },
  textinputcontainer: {
    marginHorizontal: 10,
    borderWidth: 1,
    flex: 3,
    borderColor: 'maroon',
    marginVertical: 5,
    alignSelf: 'center',
    fontSize: 20,
  },
  nametextcontainer: {
    fontSize: 20,
    fontWeight: '400',
    flex: 1.4,
    color: 'maroon',
    alignSelf: 'center',
  },
  namecontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '95%',
    padding: 5,
    marginTop: 10,
  },
  imagestyle: {
    height: 80,
    width: 80,
    marginBottom: 30,
  },
  textstyle: {
    fontSize: 30,
    fontWeight: '400',
    color: 'maroon',
    fontStyle: 'italic',
  },
});
