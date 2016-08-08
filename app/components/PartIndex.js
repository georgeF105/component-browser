import React from 'react'

import PartTable from './PartTable'
import PartPreview from './PartPreview'

class PartIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      part: null
    }
  }

  selectPreviewPart = (id) => {
    this.setState({ part: this.props.parts.find(part => part.id === id) })
    console.log('part', this.state.part)
  }

  render () {
    const part = this.state.part//.find(part => part.id === id)
    const parts = this.props.parts
    return (
      <div className='content-flexbox'>
        <PartTable parts={parts} selector={this.selectPreviewPart} />
        {part && <PartPreview part={part} />}
      </div>
    )
  }
}

export default PartIndex
