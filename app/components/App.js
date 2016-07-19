import React from 'react'
import NavLink from './NavLink'
import NavBarContainer from './containers/NavBarContainer'
import Footer from './Footer'
import routes from './routes'

export default React.createClass({
  render() {
    return (
      <div>
        <NavBarContainer />
        <div id='main'>{routes}</div>
      </div>
    )
  }
})