import React from 'react';
import AppContainer from './components/AppContainer';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
	<Provider store={store}>
		<AppContainer />
	</Provider>
);

export default App;
