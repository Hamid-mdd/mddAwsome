import React, {useState} from 'react';
import { View , Image, Platform, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text ,Icon, Left, Accordion } from 'native-base';
import { StyleSheet } from 'react-native';
const MaxWidth = Dimensions.get('screen').width;
const Maxheight =Dimensions.get('screen').height;

function loginScreen({ navigation }) {
    const [name, setName]=useState('');
    const [password, setPassword]=useState('');

    const handleChange =(e)=>{
        e.preventDefault();
        const value=e.target.value;
        setName(value)
        console.log("value", name)
    }
    const handleSubmit =()=>{
        navigation.navigate('dashboard')
    }
  return (
      
    <View style={styles.mainViewContainer}>
        <View style={styles.mainView}>
      <Image source={require('../../Assets/Img/mdd.png')}  />
        </View>
      <Content>
          <Form style={styles.formContainer}>
                <Item regular style={{borderRadius:5}}>
                    <Input placeholder='Username' style={styles.inputfield}  
                        onChangeText={name => setName(name)}
                        defaultValue={name}/>
                </Item>
                <Item regular style={{marginTop:10, borderRadius:5}}>

                    <Input placeholder='Password'  
                    style={styles.inputfield} 
                    secureTextEntry={true}
                    defaultValue={password}
                    onChangeText={password=>setPassword(password)}
                    />
                </Item>
                <Button rounded  style={styles.loginButton} onPress={handleSubmit}>
                    <Text>Sign In</Text>
                </Button>
          </Form>
          <View style={styles.forgotContainer}>
            <Button transparent
             style={styles.forgotText}
             onPress={()=>navigation.navigate('forgot')}
             >
                <Text>Forgot Password ?</Text>
            </Button>
        </View>

        <View style={styles.lastContainer}>
                <Text style={styles.textLast}>By Proceeding you also agree to the term of Service</Text>
                <Text style={styles.textLastTwo}>and Privacy Policy</Text>
        </View>
        </Content>
    </View>
  );
}

const styles = StyleSheet.create({
    mainViewContainer:{
            flex: 1,
            ...Platform.select({
              ios: {
                backgroundColor: 'white',
              },
              android: {
                backgroundColor:'white'
              },
        }),
    },
    mainView:{
        ...Platform.select({
            ios: {
              backgroundColor: 'white',
              marginHorizontal:15
            },
            android: {

              width:MaxWidth,
              height:Maxheight/3,
            marginHorizontal:20
            },
      }),

    },
    formContainer: {
        marginHorizontal:'4%',
        marginTop:30
    },
    inputfield:{
        backgroundColor:"white",
        borderRadius:5,
        borderBottomWidth:0.2,
        borderLeftWidth:0.2,
        borderRightWidth:0.2,
        borderTopWidth:0.2
    },
    loginButton:{
        marginHorizontal:'2%',
        marginTop:20,
        paddingLeft:'35%',
        width:'96%',
        backgroundColor:'#8FC54B'
    },
    forgotContainer:{
        width:'160%',
        marginTop:10
    },
    lastContainer:{
        width:'160%',
        marginTop:60
    },
    forgotText:{
        marginHorizontal:'35%',
        color:'gray'
    },
    textLast:{
        fontSize:14,
        marginHorizontal:'4%',
        color:'gray'
    },
    textLastTwo:{
        marginHorizontal:'20%',
        fontSize:14,
        color:'gray'
    }
  });   
export default loginScreen;