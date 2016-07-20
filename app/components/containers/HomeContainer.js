import { connect } from 'react-redux'
import { toJS } from 'immutable'

import Home from '../Home'


const mapStateToProps = (state) => {
	return {
		parts: state.get('parts').toJS()
	}
}


const HomeContainer = connect(mapStateToProps)(Home)

export default HomeContainer