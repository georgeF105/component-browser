import React from 'react'
import { IconButton } from 'react-mdl'

export default (props) => {
  const parts = props.parts
  const selector = props.selector
  return (
    <div className='index-table'>
      <div className='index-table-row'>
        <div className='index-col partnum heading'>Part Number
          <IconButton name='keyboard_arrow_down'/>
        </div>
        <div className='index-col description heading'>Description
          <IconButton name='sort'/>
        </div>
        <div className='index-col revision heading'>Revision
          <IconButton name='sort'/>
        </div>
      </div>
      <div className='index-table-body'>
      {parts.map((part, key) => {
        return (
          <div key={key} className='index-table-row part' value='1' onClick={selector.bind(this, part.id)} >
            <div className='index-col partnum'>{part.partNumber}</div>
            <div className='index-col description'>{part.description}</div>
            <div className='index-col revision'>{part.revision}</div>
          </div>
        )
      })}
      </div>
    </div>
  )
}
