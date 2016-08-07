import React from 'react'
import NavBarContainer from './containers/NavBarContainer'
import routes from './routes'
import { Layout, Drawer, Navigation, Content } from 'react-mdl'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <Layout>
        <NavBarContainer />
        <Content>
        	{this.props.children}
        </Content>
      </Layout>
    )
  }
})