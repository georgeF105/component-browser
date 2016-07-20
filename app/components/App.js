import React from 'react'
import NavBarContainer from './containers/NavBarContainer'
import routes from './routes'

export default React.createClass({
  render() {
    return (
      <div>
        <NavBarContainer />
        {this.props.children}
      </div>
    )
  }
})