import React from 'react'
import { Link } from 'react-router'
import { DataTable, TableHeader, IconButton } from 'react-mdl'

export default (props) => {
  const parts = props.parts
  return (
    <table className="index-table">
      <col className="col-part-num"/>
      <col className="col-description"/>
      <col className="col-revision"/>
      <tr className="index-table-heading">
        <th>Part Number</th>
        <th>Description</th>
        <th>Revision</th>
      </tr>
      {parts.map(part => {
        return (
          <tr className="part-row">
            <td>{part.partNumber}</td>
            <td>{part.description}</td>
            <td>{part.revision}</td>
          </tr>
        )
      })}
    </table>
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