import React from 'react'
import '../App.css';
import _ from 'lodash'

export default class RightBox extends React.Component {
  boxSelected(box) {
    console.log(box.value)
  }

  mapBoxes() {
    const boxes = this.props.boxes
    const boxDivs = _.map(boxes, (box) => {
        return (
          <div onClick={evt => this.boxSelected(box)} key={box.value} className="individual-box">
            {box.value}
          </div>
        )
      }
    )
    return boxDivs
  }

  render() {
    return (
      <div className='right-box'>
        <div onClick={evt => this.props.newBox()}>
          Right Box
        </div>
        <div className='individual-box-container'>
          {this.mapBoxes()}
        </div>
      </div>
    )
  }
}