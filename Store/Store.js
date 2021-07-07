import {combineReducers,createStore,applyMiddleware, compose} from 'redux'
import Reducers from '../Redux/Reducers'
import rootReducer from '../Redux/Reducers/Index'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../Saga/RootSaga'
const sagaMiddleware = createSagaMiddleware();
const ReducerData = combineReducers({
    categories:Reducers,
    reducers:rootReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configstore = createStore(ReducerData,composeEnhancers(applyMiddleware(sagaMiddleware)))


 sagaMiddleware.run(rootSaga)
export default configstore