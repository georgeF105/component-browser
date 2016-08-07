import React from 'react'
import { DataTable, TableHeader } from 'react-mdl'

import PartDetail from './PartDetail'
import PartTable from './PartTable'
import PartPreview from './PartPreview'

export default (props) => {
  const id = parseInt(props.location.query.preview)
  const part = props.parts.find(part => part.id === id)

	return (
		<div className="content-grid mdl-grid">
			<PartTable {...props} />
			{part && <PartPreview />}
		</div>
	)
}