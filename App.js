
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/Home/Home';
import loginScreen from './Components/Login/Login';
import PairingScreen from './Components/PairingScreen/PairingScreen';
import Dealership from './Components/DealerShip/Dealership';
import SearchCars from './Components/SearchCar/SearchCars';
import ResetPassword from './Components/ForgotPassword/ResetPassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import AssetsScreen from './Components/AssetsScreen/AssetsScreen'
import Map from './Components/Map/Map';
import Deals from './Components/DealerShip/Deals';
import ProfileScreen from './Components/Profile/ProfileScreen'
import { Provider } from 'react-redux'
import store from './Store'

console.log("store", store.getState())
import HeaderScreen from './Header';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#8FC54B" hidden={true} />
        <Stack.Navigator initialRouteName="Login" headerMode='none'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="deals" component={Deals} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={loginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="pairingScreen" component={PairingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="dealership" component={Dealership} options={{ headerShown: false }} />
          <Stack.Screen name="header" component={HeaderScreen} options={{ headerShown: false }} />
          <Stack.Screen name="searchcars" component={SearchCars} options={{ headerShown: false }} />
          <Stack.Screen name="forgot" component={ForgotPassword} options={{ headerShown: false }} />
          <Stack.Screen name="reset" component={ResetPassword} options={{ headerShown: false }} />
          <Stack.Screen name="map" component={Map} options={{ headerShown: false }} />
          <Stack.Screen name="Assets" component={AssetsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
