import { fromJS } from 'immutable'

const INITAL_STATE = fromJS({
  parts: [],
  currentPart: {},
  user: {
    id: 0, userName: 'Guest', loggedIn: false
  },
  isFetching: false
})

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PARTS':
      // console.log('REQUEST_PARTS')
      return state.set('isFetching', true)
    case 'RECEIVE_PARTS':
      // console.log('RECEIVE_PARTS', action.list)
      return state.set('parts', state.get('parts').push(...action.list)).set('isFetching', false)
    case 'REQUEST_PART_INFO':
      // console.log('REQUEST_PART_INFO')
      return state.set('isFetching', true)
    case 'RECEIVE_PART_INFO':
      // console.log('RECEIVE_PART_INFO', action.list)
      return state.set('currentPart', fromJS(action.list)).set('isFetching', false)
    case 'ERROR':
      // console.log('ERROR', action.list)
      return state
    default:
      // console.log('action.type not known', action.type)
      return state
  }
}
