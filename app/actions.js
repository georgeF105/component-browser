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

export function requestPartInfo () {
  return {
    type: 'REQUEST_PART_INFO'
  }
}

export function recivePartInfo (partObj) {
  return {
    type: 'RECEIVE_PART_INFO',
    list: partObj,
    receivedAt: Date.now()
  }
}

export function fetchAllParts () {
  return function (dispatch) {
    const target = '/v1/components'
    dispatch(requestParts())

    request.get(target, (err, data) => {
      if (err) {
        console.log('request error', err)
        dispatch(error(err))
      } else {
        const parts = JSON.parse(data.text)
        dispatch(reciveParts(parts))
      }
    })
  }
}

export function fetchPartInfo (id) {
  return function (dispatch) {
    const target = '/v1/components/' + id
    dispatch(requestPartInfo())

    request.get(target, (err, data) => {
      if (err) {
        console.log('request error', err)
        dispatch(error(err))
      } else {
        // console.log('PartInfo text', data.text)
        const parts = JSON.parse(data.text)
        dispatch(recivePartInfo(parts))
      }
    })
  }
}

export function error (error) {
  return {
    type: 'ERROR',
    list: error,
    receivedAt: Date.now()
  }
}
