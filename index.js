import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import personalInfo from './reducers/personalInfo';
import educationReducer from './reducers/education';
import experienceReducer from './reducers/experience';
import Style from './sass/Style.scss';
const store = createStore(combineReducers({personalInfo , educationReducer, experienceReducer }));

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.querySelector('#root')
)
