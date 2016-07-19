var components = require('../models/components')

export function requestParts () {
	return {
		type: 'REQUEST_PARTS'
	}
}

export function reciveParts (partsObj) {
	return {
		type: 'RECEIVE_PARTS',
		list: partsObj,
		receivedAt: Date.now()
	}
}

export function reciveParts (error) {
	return {
		type: 'ERROR',
		list: error,
		receivedAt: Date.now()
	}
}

export function fetchAllParts () {
	return function (dispatch) {
		dispatch(requestParts())
		components.all()
			.then(function(data){
				dispatch(reciveParts(data))
			})
			.catch(function(error){
				console.log('DB ERROR: ', error)
				dispatch(error(error))
			})
	}
}