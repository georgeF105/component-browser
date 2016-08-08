import React from 'react'
import NavBarContainer from './containers/NavBarContainer'
import { Layout, Content } from 'react-mdl'

export default React.createClass({
  render () {
    return (
      <Layout>
        <NavBarContainer {...this.props}/>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
})
