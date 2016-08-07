import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { fetchAllParts, fetchPartInfo } from './app/actions'

import reducer from './app/reducer'
import routes from './app/components/routes'
import 'react-mdl/extra/material.js'

const logger = createLogger({collapsed:true,stateTransformer: state => state.toJS()})

const store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware
	),
	applyMiddleware(logger)
)

store.dispatch(fetchAllParts())
store.dispatch(fetchPartInfo(1))

render((
  <Provider store={store}>
  	<div id='main'>{routes}</div>
  </Provider>
), document.getElementById('app'))