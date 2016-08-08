import React from 'react'

export default (props) => {
  const parts = props.parts
  const selector = props.selector
  return (
    <div className='index-table'>
      <div className='index-table-row heading'>
        <div className='col-partnum'>Part Number</div>
        <div className='col-description'>Description</div>
        <div className='col-revision'>Revision</div>
      </div>
      {parts.map((part, key) => {
        return (
          <div key={key} className='index-table-row part' value='1' onClick={selector.bind(this, part.id)} >
            <div className='col-partnum'>{part.partNumber}</div>
            <div className='col-description'>{part.description}</div>
            <div className='col-revision'>{part.revision}</div>
          </div>
        )
      })}
    </div>
  )
}
