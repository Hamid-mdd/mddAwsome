import React, { Component ,useState} from 'react';
  import {Fetch_Unfollowers,Fetch_Categories,Fetch_Mutual,Fetch_Fans,Fetch_Following} from './Types'
  
  
  ////////////////Don`t Follow back/////////
  export  function GetApiData(){
 
      return{
        type:Fetch_Categories
      };
    }
    export function SetCategoriesBooks(data)
    {
        return{
            type:"GET Categories",
            data:data
        }
    }
    export function SetCategoriesBooksFailed()
    {
        return{
            type:"Fetch_CategoriesFail",
    
        }
    }
    ////////////unfollowers///////////
  export  function GetUnFollowers(){
      return{
        type:Fetch_Unfollowers
      };
    }
    export function Setunfollowers(data)
    {
        return{
            type:"GET unFollowers",
            data:data
        }
    }
    export function SetunfollowersFailed()
    {
        return{
            type:"Fetch_UnfollowersFail",
        }
    }
////////////Mutual////////
  export  function GetMutual(){
      return{
        type:Fetch_Mutual
      };
    }
    export function Setmutual(data)
    {
        return{
            type:"GET Mutual",
            data:data
        }
    }
    export function SetmutualFailed()
    {
        return{
            type:"Fetch_MutualFail",
        }
    }
   
//////////////Fans///////////////
 
 export  function GetFans(){
      return{
        type:Fetch_Fans
      };
    }
    export function Setfans(data)
    {
        return{
            type:"GET Fans",
            data:data
        }
    }
    export function SetfansFailed()
    {
        return{
            type:"Fetch_FansFail",
        }
    }
   
    ///////////Following///////
     export  function GetFollowing(){
      return{
        type:Fetch_Following
      };
    }
   