import React from 'react'
import { IconButton } from 'react-mdl'

class PartTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sortedParts: this.props.parts,
      sortBy: 'partNumber',
      sortDirAsc: true,
      sorted: false
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({sortedParts: nextProps.parts})
  }

  componentDidUpdate () {
    if (!this.state.sorted) {
      this.sortColumn()
      return false
    }
  }

  flipSortDir = () => {
    this.setState({sortDirAsc: !this.state.sortDirAsc, sorted: false})
  }

  sortByColumn = (key) => {
    this.setState({sortBy: key, sortDirAsc: true, sorted: false})
  }

  getSortIcon = (key) => {
    const { sortBy, sortDirAsc } = this.state
    if (sortBy === key) {
      if (sortDirAsc) {
        return (
          <IconButton name='keyboard_arrow_down' onClick={this.flipSortDir} />
        )
      } else {
        return (
          <IconButton name='keyboard_arrow_up' onClick={this.flipSortDir} />
        )
      }
    } else {
      return (
        <IconButton name='sort' onClick={this.sortByColumn.bind(this, key)} />
      )
    }
  }

  sortColumn = () => {
    const key = this.state.sortBy
    let unsortedParts = this.props.parts
    const sortX = this.state.sortDirAsc ? 1 : -1
    unsortedParts.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1 * sortX
      }
      if (a[key] < b[key]) {
        return -1 * sortX
      }
      return 0
    })
    this.setState({sortedParts: unsortedParts, sorted: true})
  }

  render () {
    const { selector } = this.props
    const parts = this.state.sortedParts

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
