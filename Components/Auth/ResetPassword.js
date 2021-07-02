import React, {useState} from 'react';
import { View , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header,Body,Title, Content, Form, Item, Input, Label, Button, Text ,Icon, Left, Right } from 'native-base';
import { StyleSheet } from 'react-native';

function ResetPassword({ navigation }) {
    const [fourDigits, setFourDigits]=useState('');
    const [password, setPassword]=useState('');
    const [conPassword, setConPassword]=useState('');

    const handleChange =(e)=>{
        e.preventDefault();
        const value=e.target.value;
        setName(value)
        console.log("value", name)
    }
    const handleSubmit =()=>{
        navigation.navigate('Login')
    }
  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>
         <Header>
            <Left>
                <Button transparent onPress={() => navigation.push('Login')}> 
              {Platform.OS === 'ios'?(
                   <Icon name='arrow-back' style={{color:'black', fontSize:20}} />
              ):null} 
                </Button>
            </Left>
            <Body>
                <Title style={{fontSize:20, width:270, textAlign:'left'}}></Title>
            </Body>
            <Right/>
        </Header>
        <Icon name='checkmark-circle-outline' style={{color:'2EA94E', fontSize:100, marginHorizontal:'38%', marginTop:10}} />
      <Image source={require('../../Assets/Img/mdd.png')} style={{marginHorizontal:'4%', height:250}} />
      <Content>
          <Form style={styles.formContainer}>
  
                <Item regular style={{borderRadius:5}}>
                    <Input placeholder='Enter Four Digits Code' style={styles.inputfield}  
                        onChangeText={fourDigits => setFourDigits(fourDigits)}
                        defaultValue={fourDigits}/>
                </Item>
                <Item regular style={{borderRadius:5 , marginTop:10}}>
                    <Input placeholder='New Password' style={styles.inputfield}  
                        onChangeText={password => setPassword(password)}
                        defaultValue={password}/>
                </Item>
                <Item regular style={{borderRadius:5 , marginTop:10}}>
                    <Input placeholder='Confirm Password' style={styles.inputfield}  
                        onChangeText={conPassword => setConPassword(conPassword)}
                        defaultValue={conPassword}/>
                </Item>
      
                <Button rounded success style={styles.forgotButton} onPress={handleSubmit}>
                    <Text>Reset Password</Text>
                </Button>
          </Form>


        </Content>
    </View>
  );
}

const styles = StyleSheet.create({
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
        borderTopWidth:0.2,
    },
    forgotButton:{
        marginHorizontal:'1%',
        marginTop:20,
        paddingLeft:'30%',
        width:'96%'
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
export default ResetPassword;