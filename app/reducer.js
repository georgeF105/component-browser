import {fromJS} from 'immutable'

const INITAL_STATE = fromJS({
	parts:[
		{id: 1, partNumber: '100-00001', 'description': 'Wheely Chair', 'revision':0},
		{id: 2, partNumber: '100-00002', 'description': 'Seat Assm', 'revision':0},
		{id: 3, partNumber: '100-00003', 'description': 'Gas Strut', 'revision':0},
		{id: 4, partNumber: '100-00004', 'description': 'Base Assm', 'revision':0}
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
			console.log('RECEIVE_PARTS')
			
			return state.set('parts', action.list)
		default:
			console.log('action.type not known', action.type)
			return state
	}
}