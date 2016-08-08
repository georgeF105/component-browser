import React from 'react'
import { Navigation, Header, Textfield } from 'react-mdl'

import NavLink from './NavLink'

export default (props) => {
  return (
    <Header title='Parts'>
      <Navigation>
        <NavLink to='/parts'> Part Index</NavLink>
        <NavLink to='/about'> About</NavLink>
      </Navigation>
      <Textfield
        value=''
        onChange={f => f}
        label='Search'
        expandable
        expandableIcon='search' />
    </Header>
  )
}
