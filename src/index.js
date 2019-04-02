import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import Graphics from './containers/graphics';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import reducer from './reducers';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Vacancy from './containers/vacancy';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

//store.subscribe(() => {
//  console.log('subscribe', store.getState());
//})

ReactDOM.render(
	<Provider store={store}>
	<Router history={history}>
		<Route path="/" component={App}/>
		<Route path="/graphics" component={Graphics}/>
		<Route path="vacancy/:id" component={Vacancy}/>
	</Router>
	</Provider>, 
	document.getElementById('root'));