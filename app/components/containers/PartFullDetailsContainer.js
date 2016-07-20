import { connect } from 'react-redux'
import { toJS } from 'immutable'

import PartFullDetails from '../PartFullDetails'


const mapStateToProps = (state) => {
	console.log('State.currentPart', state.get('currentPart').toJS())
	return {
		currentPart: state.get('currentPart').toJS()
	}
}


const PartFullDetailsContainer = connect(mapStateToProps)(PartFullDetails)

export default PartFullDetailsContainer