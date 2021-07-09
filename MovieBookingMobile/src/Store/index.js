import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../Reducers'
import {logger} from 'redux-logger'

import { createStore, applyMiddleware, compose } from 'redux';

//const rootReducer = combineReducers({movies: movies})
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,logger)))
//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
//sagaMiddleware.run(rootSaga);
export default store;