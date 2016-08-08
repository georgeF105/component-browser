import React from 'react'
import { Link } from 'react-router'
import { DataTable, TableHeader, IconButton } from 'react-mdl'

export default (props) => {
  const parts = props.parts
  return (
    <div className="index-table">
      <div className="index-table-row heading">
        <div className="col-partnum">Part Number</div>
        <div className="col-description">Description</div>
        <div className="col-revision">Revision</div>
      </div>
      {parts.map(part => {
        return (
          <div className="index-table-row part">
            <div className="col-partnum">{part.partNumber}</div>
            <div className="col-description">{part.description}</div>
            <div className="col-revision">{part.revision}</div>
          </div>
        )
      })}
    </div>
  )
}


// <DataTable className='mdl-cell mdl-cell--8-col' shadow={0} rows={props.parts}>
//       <TableHeader name='partNumber'>
//         Part Number
//       </TableHeader>
//       <TableHeader name='description'>
//         Description
//       </TableHeader>
//       <TableHeader name='revision'>
//         Revision
//       </TableHeader>
//       <TableHeader name='id' cellFormatter={(id) =>
//         <Link to={{ pathname: '/parts', query: {preview: `${id}`} }}>
//           <IconButton name='launch' />
//         </Link>}>
//         Preview
//       </TableHeader>
//     </DataTable>