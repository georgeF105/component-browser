import { connect } from 'react-redux'

import NavBar from '../NavBar'

const mapStateToProps = (state) => {
  return {
    NavBarInfo: state.get('user').toJS()
  }
}

const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer
