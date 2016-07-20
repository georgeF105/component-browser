import React from 'react'
import PartDetail from './PartDetail';

export default (props) => {
	console.log('id',props.params.id)
	!props.isFetching && props.currentPart.part.id != props.params.id ? props.fetchPartInfo(props.params.id) : null
	return (
		<div className="container">
			{ !props.isFetching &&
				<div>
					<h2>Description: {props.currentPart.part.description}</h2>
					<h2>Part Number: {props.currentPart.part.partNumber} Rev: {props.currentPart.part.revision} </h2>
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
			}
		</div>
	)
}