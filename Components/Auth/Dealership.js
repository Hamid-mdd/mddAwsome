import React, { useState } from "react";
import { Container, Header, Content,Text, Title,Item, Input, Icon , Left, Body, Button, Right} from 'native-base';
import { View , Platform , Switch, StatusBar} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import styles from './auth'
import { color } from 'react-native-reanimated';
function Dealership({navigation, route}){
  const { itemId } = route.params;
  // const { otherParam } = route.params;
  console.log("itemId", itemId)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    console.log("data")
    return(
        <Container>
           <StatusBar backgroundColor="#8FC54B" hidden={true} />
        <View style={styles.DealershipContainer}>
          <View style={{marginLeft:30,marginBottom:30}}>
        <ToggleSwitch
          isOn={isEnabled}
          onColor="#146aff"
          offColor="#146aff"
          labelStyle={{ color: "black", fontWeight: "100" , marginLeft:100}}
          size="small"
          onToggle={toggleSwitch} 
        />
        </View>
            <Text style={styles.dealerShipHeading}>Select Dealership</Text>
            <Text style={styles.dealerShipText}>This page will load  what dealerships  {"\n"}the user has access to 
            . Users Sometimes{"\n"}Switch between several Stores{"\n"} {"\n"}We Should be able to Turn on Location {"\n"}Services on This Page</Text>
        <Button transparent style={{marginTop:20}} onPress={()=>navigation.navigate('Login')}>
            <Text style={{color:'black'}}>Logout </Text>
          </Button>
          <Button transparent 
          onPress={()=>navigation.navigate('searchcars')}>
            <Text style={{color:'black'}}>Change Password</Text>
          </Button>
        </View>
      </Container>
    )
}
export default Dealership;