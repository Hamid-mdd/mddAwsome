
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/Home/Home';
import loginScreen from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Dealership from './Components/DealerShip/Dealership';
import SearchCars from './Components/SearchCar/SearchCars';
import ResetPassword from './Components/ForgotPassword/ResetPassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Map from './Components/Map/Map';
import {Provider} from 'react-redux'
import configstore from './Store/Store'

 
const store = configstore

console.log("store",store.getState())
import HeaderScreen from './Header';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <StatusBar backgroundColor="#8FC54B" hidden={true} />
        <Stack.Navigator initialRouteName="Login" headerMode ='none'>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={loginScreen} options={{headerShown:false}} />
          <Stack.Screen name="dashboard" component={Dashboard} options={{headerShown:false}} />
          <Stack.Screen name="dealership" component={Dealership} options={{headerShown:false}} />
          <Stack.Screen name="header" component={HeaderScreen} options={{headerShown:false}} />
          <Stack.Screen name="searchcars" component={SearchCars} options={{headerShown:false}} />
          <Stack.Screen name="forgot" component={ForgotPassword} options={{headerShown:false}} />
          <Stack.Screen name="reset" component={ResetPassword} options={{headerShown:false}} />
          <Stack.Screen name="map" component={Map} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
export default App;
