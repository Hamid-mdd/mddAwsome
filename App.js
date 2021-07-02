
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/Auth/Home';
import loginScreen from './Components/Auth/Login';
import Dashboard from './Components/Auth//Dashboard';
import Dealership from './Components/Auth//Dealership';
import SearchCars from './Components/Auth//SearchCars';
import ResetPassword from './Components/Auth/ResetPassword';
import ForgotPassword from './Components/Auth/ForgotPassword';
import Map from './Components/Auth//Map';



import HeaderScreen from './Header';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();
function App() {
  return (
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
        <Stack.Screen name="resetPassword" component={ResetPassword} options={{headerShown:false}} />
        <Stack.Screen name="map" component={Map} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
