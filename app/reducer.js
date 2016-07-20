import {fromJS} from 'immutable'

const INITAL_STATE = fromJS({
	parts:[
		
	],
	user:{
		id:0, userName:'Guest', loggedIn: false
	}
})

export default (state = INITAL_STATE, action) => {
	switch(action.type) {
		case 'REQUEST_PARTS':
			console.log('REQUEST_PARTS')
			return state
		case 'RECEIVE_PARTS':
			console.log('RECEIVE_PARTS', action.list)
			return state.set('parts', state.get('parts').push(...action.list))
		case 'ERROR':
			console.log('ERROR', action.list)
			return state
		default:
			console.log('action.type not known', action.type)
			return state
	}
}