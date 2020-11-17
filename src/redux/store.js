import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export let store = createStore(reducer, composeWithDevTools());
