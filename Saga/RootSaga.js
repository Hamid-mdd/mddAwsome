import { all } from "redux-saga/effects";
import {waitForFetchProducts} from './Saga';
 
 export function* rootSaga() {
  yield all([waitForFetchProducts()]);
}