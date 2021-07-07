import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import {Fetch_Categories,
  Fetch_Unfollowers,
  Fetch_Mutual,
  Fetch_Fans,
  Fetch_Following
} from '../Redux/Types'
import productsService from '../Services/Api'
import {SetCategoriesBooks,
  SetCategoriesBooksFailed,
  Setunfollowers,
  SetunfollowersFailed,
  Setmutual,
  SetmutualFailed,
  Setfans,
  SetfansFailed,
  Setfollowing,
  SetfollowingFailed
} from "../Redux/Actions.js";
 
///////////////Don`t Follow Back///////
 
  function* fetchCategories() {
  try {
   // console.log("fetch Categories ma a gaya")
    const products = yield call(productsService.getAllProducts);
   // console.log("product vaule is",products)
    if(products!=undefined)
    {
        yield put(SetCategoriesBooks(products));
    }
    else{
        yield put(SetCategoriesBooksFailed());
    }
 
  } catch (e) {
    console.log("error")
  }
}
//////////
 function* fetchBestBooksList() {
    try {
      const products = yield call(productsService.getAllProducts);
    //  console.log("BestSelling Books is",products)
     if(products!=undefined)
     {
        yield put(Setunfollowers(products));
     }
     else
     {
        yield put(SetunfollowersFailed());
     }
    
    } catch (e) {
      console.log("error h BAHI")
    }
  }
  ///////////Mutual
 function* fetchMutualList() {
    try {
      const products = yield call(productsService.getAllProducts);
    //  console.log("BestSelling Books is",products)
     if(products!=undefined)
     {
        yield put(Setmutual(products));
     }
     else
     {
        yield put(SetmutualFailed());
     }
    
    } catch (e) {
      console.log("error h BAHI")
    }
  }
  ///////////////Fans
 function* fetchFansList() {
    try {
      const products = yield call(productsService.getFans);
    //  console.log("BestSelling Books is",products)
     if(products!=undefined)
     {
        yield put(Setfans(products));
     }
     else
     {
        yield put(SetfansFailed());
     }
    
    } catch (e) {
      console.log("error h BAHI")
    }
  }
 
  ////////////////////////Following//////
   function* fetchFollowingList() {
    try {
      const products = yield call(productsService.getFollowing);
    //  console.log("BestSelling Books is",products)
     if(products!=undefined)
     {
        yield put(Setfollowing(products));
     }
     else
     {
        yield put(SetfollowingFailed());
     }
    
    } catch (e) {
      console.log("error h BAHI")
    }
  }
 
  export function* waitForFetchProducts() {
    yield takeLatest(Fetch_Categories, fetchCategories);
     yield takeLatest(Fetch_Unfollowers, fetchBestBooksList); 
     yield takeLatest(Fetch_Mutual, fetchMutualList); 
     yield takeLatest(Fetch_Fans, fetchFansList); 
     yield takeLatest(Fetch_Following, fetchFollowingList); 
  }
   