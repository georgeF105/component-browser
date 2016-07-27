import React from 'react'
import PartDetail from './PartDetail'
import { DataTable, TableHeader } from 'react-mdl'


export default (props) => {
	return (
		<div className="content-grid mdl-grid">
			<h2>Components</h2>
			<DataTable shadow={0} rows={props.parts} style={{margin:'auto'}}>
				<TableHeader name="partNumber">Part Number</TableHeader>
				<TableHeader name="description">Description</TableHeader>
				<TableHeader name="revision">Revision</TableHeader>
			</DataTable>
		</div>
	)
}


		// 	<ul>
		// 	{props.parts ? 
		// 		props.parts.map( (part, key) => {return <PartDetail {...part} key={key}/>}) :
		// 		<h4>No Parts Found</h4>}
		// 	</ul>