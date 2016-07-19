import request from 'superagent'

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
		const target = 'http://localhost:8080/v1/components'
		dispatch(requestParts())

		request.get(target, (err, data) => {
			if(err) {
				console.log('request error',err)
			}
			else {
				console.log('data.text', data)
				const parts = JSON.parse(data.text)
				dispatch(reciveParts(parts))
			}
		})
	}
}