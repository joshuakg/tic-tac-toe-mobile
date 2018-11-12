
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import {MainReducer} from './reducer.js';

export const store = createStore(MainReducer, applyMiddleware(thunkMiddleware))