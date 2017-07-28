import React from 'react'

export default class Number extends React.Component {
  render() {
    return (
      <div>
        <div><p>Number:</p><p>{this.props.number}</p></div>
        <button onClick={evt => this.props.newNumber(this.props.number + 1)}/>
      </div>
    )
  }
}
