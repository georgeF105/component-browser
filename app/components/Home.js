import React from 'react'
import { Link } from 'react-router'

export default (props) => {
	return (
		<div className="container">
			<h1>Home</h1>
			<Link to="/parts">All Parts</Link>
		</div>
	)
}