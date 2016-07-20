import React from 'react'
import { Link } from 'react-router'

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
  	<nav className="navbar navbar-inverse navbar-fixed-top">
  	  <div className="container">
  	    <div className="navbar-header">
  	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
  	        <span className="sr-only">Toggle navigation</span>
  	        <span className="icon-bar"></span>
  	        <span className="icon-bar"></span>
  	        <span className="icon-bar"></span>
  	      </button>
  	      <Link className="navbar-brand" to="/">Component Browser</Link>
  	    </div>
  	    <div id="navbar" className="navbar-collapse collapse">

  	    </div>
  	  </div>
  	</nav>
  )
}