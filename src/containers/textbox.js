import React from 'react'
import { textChanged } from '../actions/text'
import { connect } from 'react-redux'

const TextBox = props => {
  return (
    <input value={props.text} onChange={(evt) => props.textChanged(evt.target.value)}/>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    textChanged: (newText) => {
      dispatch(textChanged(newText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBox)