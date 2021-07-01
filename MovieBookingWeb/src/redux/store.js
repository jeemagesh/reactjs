import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './Saga/index';


const sagaMiddleware = createSagaMiddleware();

//const rootReducer = combineReducers({movies: movies})
//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);
export default store;