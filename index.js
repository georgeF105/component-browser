import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { fetchAllParts } from './app/actions'

import reducer from './app/reducer'
import App from './app/components/App'

const logger = createLogger()

const store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware
	)
	// applyMiddleware(logger)
)

store.dispatch(fetchAllParts())

render((
  <Provider store={store}>
  	<App />
  </Provider>
), document.getElementById('app'))