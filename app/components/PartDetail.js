import React from 'react'
import { Link } from 'react-router'

export default (props) => {
	return (
		<span>
			<li><Link to={`/parts/${props.id}`}>Part Number: {props.partNumber} Description:{props.description} </Link></li>
		</span>
	)
}