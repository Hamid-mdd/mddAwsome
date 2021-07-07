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
      data:'',
      isLoading: true,
      unFollowers:'',
      Mutal:'',
      Fans:'',
      Following:'',
  }
  const mainReducer=(state=state,action)=>
  {
      if(action.type==="GET unFollowers")
      {
          return{
              ...state,
              unFollowers:action.data,
              isLoading: false
          }
        }
          else if(action.type==="GET Categories")
          {
          return{
            ...state,
             data:action.data,
              isLoading: false
        }
        
      }
       else if(action.type==="GET Mutual")
          {
          return{
            ...state,
             Mutal:action.data,
              isLoading: false
        }
        
      }
      else if(action.type==="Fetch_MutualFail")
        {
      return{
      ...state
    }
    }
       else if(action.type==="GET Fans")
          {
          return{
            ...state,
             Fans:action.data,
              isLoading: false
        }
        
      }
      else if(action.type==="Fetch_FansFail")
        {
      return{
      ...state
    }
    }
       else if(action.type==="GET Following")
          {
          return{
            ...state,
             Following:action.data,
              isLoading: false
        }
        
      }
      else if(action.type==="Fetch_FollowingFail")
        {
      return{
      ...state
    }
    }
      else if(action.type==="Fetch_UnfollowersFail")
        {
      return{
      ...state
    }
    }
     /////////////////
      else if(action.type==="Fetch_CategoriesFail")
      {
      return{
        ...state
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
  export default mainReducer;