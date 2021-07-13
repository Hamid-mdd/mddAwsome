import React, { Component } from 'react';
import { Container, Content, Button, Text,Header,Left,Right,Icon,Body,Title } from 'native-base';
import {Platform,StatusBar}from 'react-native'
import styles from './ProfileStyle'
const ProfileScreen=({navigation})=>{
    return (
      <Container>
           <Header style={{backgroundColor:'white'}}>
        <StatusBar backgroundColor="#8FC54B" hidden={false} barStyle="light-content"/>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}> 
              
                   <Icon name='arrow-back' style={{color:'black', fontSize:20}} />
              
                </Button>
            </Left>
            <Body>
                {Platform.OS === 'ios' ? 
             <Title style={{fontSize:20, width:270, textAlign:'left'}}>BMW of Minettonka</Title> 
             :
             <Title style={{fontSize:20, width:270, textAlign:'left', color:'black'}}>BMW of Minettonka</Title>   
            }
            </Body>
            <Right/>
        </Header>
        <Content>
        <Button  full style={styles.Buttonchangeorg}>
            <Text style={{color:'black',fontWeight:'bold'}}>Change Org</Text>
          </Button>
          <Button  full style={styles.ButtonChangePas}>
            <Text style={{color:'black',fontWeight:'bold'}}>Change Password</Text>
          </Button>
          <Button  full style={styles.LogoutButton} onPress={() => navigation.navigate("Login")}>
            <Text style={{color:'black',fontWeight:'bold'}}>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
export default ProfileScreen;