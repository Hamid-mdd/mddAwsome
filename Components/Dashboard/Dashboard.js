import React, { useEffect } from 'react';
import { Container, Header, Content,Text, Title,Item, Input, Icon , Left, Body, Button, Right} from 'native-base';
import { View , Platform, StatusBar,TextInput,KeyboardAvoidingView, ScrollView} from 'react-native'

import DashboardStyles from './DashboardStyle';
import { color } from 'react-native-reanimated';
function Dashboard({navigation}){
    
    useEffect(() => {
        // StatusBar.setBarStyle('light-content', true)
        // const statusbar = StatusBar.setBackgroundColor('green')
        // console.log("statusbar", statusbar)
      },[]);
    return(
        <Container>
           <ScrollView style={{flex:1}}>
        <Header style={{backgroundColor:'white'}}>
        <StatusBar backgroundColor="#8FC54B" hidden={false} barStyle="light-content"/>
            <Left>
                <Button transparent onPress={() => navigation.push('Login')}> 
              
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
        
        <View style={DashboardStyles.DashboardContainer}>
            <View style={DashboardStyles.DashboardInputsView}>
                
                <Item style={DashboardStyles.DashboardInput} regular> 
                    <Input placeholder='Asset ID e.g VIN'/>
                    <Button iconLeft transparent >
                        <Icon name='ios-camera-sharp'  active style={{color:'gray', fontSize:20}}/>
                    </Button>
                </Item>
                <Item style={DashboardStyles.DashboardInput} regular> 
                    <Input placeholder='Car'/>
                    <Button iconLeft transparent >
                        <Icon name='ios-camera-sharp' active style={{color:'gray', fontSize:20}}/>
                    </Button>
                </Item>
               
            </View>
                 <Button light
                onPress={() => {
                    navigation.navigate('dealership', {
                      itemId: 1,
                      otherParam: 'anything you want here',
                    });
                  }}
                 style={DashboardStyles.dashboardBottomButton}>
                     <Text style={{paddingLeft:150, color:'gray'}}> PAIR </Text>
                </Button>
        </View> 
        </ScrollView>     
      </Container>

    )
}
export default Dashboard;
