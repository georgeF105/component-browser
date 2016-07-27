import React from 'react'
import { DataTable, TableHeader } from 'react-mdl'

import PartDetail from './PartDetail'
import PartTable from './PartTable'
import PartPreview from './PartPreview'

export default (props) => {
	return (
		<div className="content-grid mdl-grid">
			<PartTable {...props} />
			<PartPreview />
		</div>
	)
}