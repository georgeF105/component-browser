import React from 'react'
import { IconButton } from 'react-mdl'

const sortType = {
  ASC: 'ASC',
  DESC: 'DESC'
}

class PartTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sortBy: 'partNumber',
      sortDirAsc: true
    }
  }

  flipSortDir = () => {
    this.setState({sortDirAsc: !this.state.sortDirAsc})
  }

  sortByColumn = (key) => {
    this.setState({sortBy: key, sortDirAsc: true})
  }
  getSortIcon = (key) => {
    const { sortBy, sortDirAsc } = this.state
    if (sortBy === key) {
      if (sortDirAsc) {
        return (
          <IconButton name='keyboard_arrow_down' onClick={this.flipSortDir}/>
        )
      } else {
        return (
          <IconButton name='keyboard_arrow_up' onClick={this.flipSortDir}/>
        )
      }
    } else {
      return (
        <IconButton name='sort' onClick={this.sortByColumn.bind(this, key)} />
      )
    }
  }

  render () {
    const { parts, selector } = this.props
    const { sortBy, sortDirAsc } = this.state
    return (
      <div className='index-table'>
        <div className='index-table-row heading'>
          <div className='index-col partnum heading'>Part Number
            {this.getSortIcon('partNumber')}
          </div>
          <div className='index-col description heading'>Description
            {this.getSortIcon('description')}
          </div>
          <div className='index-col revision heading'>Revision
            {this.getSortIcon('revision')}
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
}

export default PartTable
