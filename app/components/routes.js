import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import PartIndexContainer from './containers/PartIndexContainer'
import HomeContainer from './containers/HomeContainer'
import App from './App';
import PartFullDetailsContainer from './containers/PartFullDetailsContainer';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeContainer}/>
			<Route path="parts" component={PartIndexContainer}/>
			<Route path="parts/:id" component={PartFullDetailsContainer} />
		</Route>
	</Router>
)