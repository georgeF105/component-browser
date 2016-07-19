import {fromJS} from 'immutable'

const INITAL_STATE = fromJS({
	user:{
		id:0, userName:'Guest', loggedIn: false
	}
})

export default (state = INITAL_STATE, action) => {
	switch(action.type) {
		case 'TEST':
			console.log('TEST')
			return state
		default:
			console.log('action.type not known', action.type)
			return state
	}
}