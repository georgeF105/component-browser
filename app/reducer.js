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
		case 'TEST':
			console.log('TEST')
			return state
		default:
			console.log('action.type not known', action.type)
			return state
	}
}