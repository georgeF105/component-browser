import { connect } from 'react-redux'
import { toJS } from 'immutable'

import PartIndex from '../PartIndex'


const mapStateToProps = (state) => {
	return {
		parts: state.get('parts').toJS()
	}
}


const PartIndexContainer = connect(mapStateToProps)(PartIndex)

export default PartIndexContainer