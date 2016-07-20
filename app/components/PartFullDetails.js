import React from 'react'
import PartDetail from './PartDetail';

export default (props) => {
	return (
		<div className="container">
			<h2>{props.currentPart.part ? props.currentPart.part.description : 'Part Not Found'}</h2>
			<h4>Bill Of Materials:</h4>
			<ul>
			{props.currentPart.subParts ? 
				props.currentPart.subParts.map( (part, key) => {return <PartDetail {...part} key={key}/>}) :
				<h4>No Parts Found</h4>}
			</ul>
			<h4>Used In</h4>
			<ul>
			{props.currentPart.parentParts ? 
				props.currentPart.parentParts.map( (part, key) => {return <PartDetail {...part} key={key}/>}) :
				<h4>No Parts Found</h4>}
			</ul>
		</div>
	)
}