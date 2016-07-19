import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import PartIndexContainer from './containers/PartIndexContainer'

export default (
	<Router history={browserHistory}>
		<Route path="/" component={PartIndexContainer} />
		
	</Router>
)