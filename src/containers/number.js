import { numberChanged } from '../actions/number'
import { connect } from 'react-redux'
import Number from '../components/number'

const mapStateToProps = state => {
  return {
    number: state.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newNumber: (newNumber) => {
      dispatch(numberChanged(newNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Number)
