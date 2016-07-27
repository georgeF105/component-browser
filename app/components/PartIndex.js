import React from 'react'
import { DataTable, TableHeader } from 'react-mdl'

import PartDetail from './PartDetail'
import PartTable from './PartTable'

export default (props) => {
	return (
		<div className="content-grid mdl-grid">
			<PartTable {...props} />
		</div>
	)
}


		// 	<ul>
		// 	{props.parts ? 
		// 		props.parts.map( (part, key) => {return <PartDetail {...part} key={key}/>}) :
		// 		<h4>No Parts Found</h4>}
		// 	</ul>