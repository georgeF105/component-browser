import React from 'react'
import PartDetail from './PartDetail';

export default (props) => {
	return (
		<div className="container">
			<h2>Components</h2>
			<ul>
			{props.parts ? 
				props.parts.map( (part, key) => {return <PartDetail {...part} key={key}/>}) :
				<h4>No Parts Found</h4>}
			</ul>
		</div>
	)
}