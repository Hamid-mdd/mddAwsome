import React, { useEffect } from 'react';
import { Container, Header, Content,Text, Title,Item, Input, Icon , Left, Body, Button, Right} from 'native-base';
import { View , Platform, StatusBar, SafeAreaView, FlatList } from 'react-native'

import styles from './auth'
import { color } from 'react-native-reanimated';
import FlatListWrapper from './FlatList';


  
function SearchCars({navigation}){
    
    useEffect(() => {
        // StatusBar.setBarStyle('light-content', true)
        // const statusbar = StatusBar.setBackgroundColor('green')
        // console.log("statusbar", statusbar)

      },[]);

    console.log("data")
    return(
        <Container>
        <View style={styles.DashboardContainer}>
            <View style={styles.SearchFieldInputView}>
                <Item style={styles.DashboardInput} regular> 
            
                        <Icon name='search' active style={{color:'gray', fontSize:18}}/>
                  
                    <Input placeholder='Use BMW 3 Series' style={{fontSize:12,paddingLeft:-20}}/>
                    {
                        Platform.OS === 'ios' ?
                        (
                            <>
                            <Button iconLeft transparent >
                            <Icon name='close' active style={{color:'gray'}}/>
                            </Button>
                            <Button close transparent >
                                <Icon name='mic' active style={{color:'gray'}}/>
                            </Button>
                            </>
                        ):(
                            <>
                            <Button iconLeft transparent >
                            <Icon name='close' active style={{color:'gray'}}/>
                            </Button>
                            <Button close transparent >
                                <Icon name='mic' active style={{color:'gray'}}/>
                            </Button>
                            </>
                        )

                    }
                </Item>
            </View>
            <FlatListWrapper></FlatListWrapper>
        </View>
      </Container>

    )
}
export default SearchCars;
