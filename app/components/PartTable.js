import React from 'react'
import { IconButton } from 'react-mdl'

class PartTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sortedParts: this.props.parts,
      sortBy: 'partNumber',
      sortDirAsc: true,
      sorted: false,
      searchFeild: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({sortedParts: nextProps.parts})
  }

  componentDidUpdate () {
    if (!this.state.sorted) {
      let updatedParts = this.sortColumn(this.state.sortedParts)
      updatedParts = this.filterColumns(updatedParts)
      this.setState({sortedParts: updatedParts, sorted: true})
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
        <IconButton name='swap_vert' onClick={this.sortByColumn.bind(this, key)} />
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
    return unsortedParts
  }

  updateSearchField = (e) => {
    const searchObject = {}
    searchObject[e.target.name] = e.target.value
    const newSearchFeild = Object.assign(this.state.searchFeild, searchObject)
    this.setState({searchFeild: newSearchFeild, sorted: false})
  }

  filterColumns = (columns) => {
    let filteredColumns = columns
    for (let searchKey in this.state.searchFeild) {
      if (this.state.searchFeild[searchKey].length) {
        console.log('searching for searchKey:', searchKey, 'value', this.state.searchFeild[searchKey])
        filteredColumns = columns.filter(part => {
          return part[searchKey].search(this.state.searchFeild[searchKey]) === -1 ? false : true
        })
      }
    }
    return  filteredColumns
  }

  render () {
    const { selector } = this.props
    const parts = this.state.sortedParts
    console.log('state', this.state.searchFeild)
    return (
      <div className='index-table'>
        <div className='index-table-row heading'>
          <div className='index-col partnum heading'>
            <input className='search-input partnum' type='text' placeholder='Part Number' name='partNumber' onChange={this.updateSearchField.bind(this)}/>
            {this.getSortIcon('partNumber')}
          </div>
          <div className='index-col description heading'>
            <input className='search-input description' type='text' placeholder='Description' name='description' onChange={this.updateSearchField.bind(this)}/>
            {this.getSortIcon('description')}
          </div>
          <div className='index-col revision heading'>
            <input className='search-input revision' type='text' placeholder='Revision' name='revision' onChange={this.updateSearchField.bind(this)}/>
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
