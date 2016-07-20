import { connect } from 'react-redux'
import { toJS } from 'immutable'

import PartFullDetails from '../PartFullDetails'
import { fetchPartInfo } from '../../actions'

const mapStateToProps = (state) => {
	console.log('State.currentPart', state.get('currentPart').toJS())
	return {
		currentPart: state.get('currentPart').toJS(),
		isFetching: state.get('isFetching')
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPartInfo: (id) => {
			dispatch(fetchPartInfo(id))
		}
	}
}

const PartFullDetailsContainer = connect(mapStateToProps,mapDispatchToProps)(PartFullDetails)

export default PartFullDetailsContainer