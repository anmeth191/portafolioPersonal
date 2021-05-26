import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import personalInfo from './reducers/personalInfo';
import Style from './styles/Style.scss';
const store = createStore(personalInfo);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.querySelector('#root')
)
