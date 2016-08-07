import React from 'react'
import { Link } from 'react-router'
import { DataTable, TableHeader, IconButton } from 'react-mdl'

export default (props) => {
  return (
    <DataTable className='mdl-cell mdl-cell--8-col' shadow={0} rows={props.parts}>
      <TableHeader name='partNumber'>
        Part Number
      </TableHeader>
      <TableHeader name='description'>
        Description
      </TableHeader>
      <TableHeader name='revision'>
        Revision
      </TableHeader>
      <TableHeader name='id' cellFormatter={(id) =>
        <Link to={{ pathname: '/parts', query: {preview: `${id}`} }}>
          <IconButton name='launch' />
        </Link>}>
        Preview
      </TableHeader>
    </DataTable>
  )
}
