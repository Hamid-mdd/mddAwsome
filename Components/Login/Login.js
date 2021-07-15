import React, { useState } from 'react';
import { View, Image, Platform, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Icon, Left, Accordion } from 'native-base';
import { StyleSheet } from 'react-native';
import Loginstyles from './LoginStyle';
// import {LoginSuccess} from '../../Redux/Actions/LoginAction'
import { fetchUsers } from '../../Store/actions/LoginAction'
import { useSelector, useDispatch } from 'react-redux'


function loginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const reduxData = useSelector((state) => state)
  console.log("counter", reduxData)



  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setName(value)
  }
  const handleSubmit = () => {
    dispatch(fetchUsers({ name, password }))
    navigation.navigate('Home')
  }
  return (
    <View style={Loginstyles.mainViewContainer}>
      <View style={Loginstyles.mainView}>
        <Image source={require('../../Assets/Img/mdd.png')} />
      </View>
      <Content>
        <Form style={Loginstyles.formContainer}>
          <Item regular style={{ borderRadius: 5 }}>
            <Input placeholder='Username' style={Loginstyles.inputfield}
              onChangeText={name => setName(name)}

              defaultValue={name} />
          </Item>
          <Item regular style={{ marginTop: 10, borderRadius: 5 }}>

            <Input placeholder='Password'
              style={Loginstyles.inputfield}
              secureTextEntry={true}
              defaultValue={password}

              onChangeText={password => setPassword(password)}
            />
          </Item>
          <Button style={Loginstyles.loginButton} onPress={handleSubmit}>
            <Text>Sign In</Text>
          </Button>
        </Form>
        <View style={Loginstyles.forgotContainer}>
          <Button transparent
            style={Loginstyles.forgotText}
            onPress={() => navigation.navigate('forgot')}
          >
            <Text>Forgot Password ?</Text>
          </Button>
        </View>

        <View style={Loginstyles.lastContainer}>
          <Text style={Loginstyles.textLast}>By Proceeding you also agree to the term of Service</Text>
          <Text style={Loginstyles.textLastTwo}>and Privacy Policy</Text>
        </View>
      </Content>
    </View>
  );
}


export default loginScreen;