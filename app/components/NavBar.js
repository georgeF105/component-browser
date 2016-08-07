import React from 'react'
import { Link } from 'react-router'
import { Navigation, Header, HeaderRow, Drawer, Textfield } from 'react-mdl'

export default (props) => {
	const login = (event) => {
		event.preventDefault()
		console.log('trying to login', document.getElementById("login-form"))
		props.logIn(document.getElementById('email-input').value,document.getElementById('password-input').value)
	}
	const logOut = (event) => {
		console.log('trying to logout', event)
		event.preventDefault()
		props.logOut()
	}
  return (
    // <div>
      <Header waterfall>
        <HeaderRow title="Parts">
          <Textfield
            value=""
            onChange={() => {}}
            label="Search"
            expandable
            expandableIcon="search"
          />
        </HeaderRow>
        <HeaderRow>
          <Navigation>
            <Link to="/parts">Part Index</Link>
            <Link to="">Something Else</Link>
          </Navigation>
        </HeaderRow>
      </Header>
      
    // </div>
  )
}