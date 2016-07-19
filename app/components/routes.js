import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import PartIndexContainer from './containers/PartIndexContainer'
import HomeContainer from './containers/HomeContainer'

export default (
	<Router history={browserHistory}>
		<Route path="/" component={HomeContainer} />
		<Route path="/parts" component={PartIndexContainer} />
		<Route path="/parts/:id" component={PartIndexContainer} />
		
	</Router>
)