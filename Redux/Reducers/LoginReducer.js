import React, { Component ,useState} from 'react';
import{
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    Image,
    TouchableOpacity,
  } from 'react-native';
  let state ={
      payload:null,
      data:null,
      isLoading: true,

  }
  const LoginReducer=(state=state,action)=>
  {
      if(action.type==="LOGIN_REQUEST")
      {
          return{
              ...state,
              unFollowers:action.data,
              isLoading: false
          }
        }
      else if(action.type==="LOGIN_FAILURE")
        {
        return{
        ...state,
        isLoading:true
        }
        }
    
      else
      {
          return{
              ...state,
              isLoading: true
          }
          
      }
  }
  export default LoginReducer;