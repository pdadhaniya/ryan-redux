import { newBoxRequest } from '../actions/box'
import { connect } from 'react-redux'
import RightBox from '../components/right-box'

const mapStateToProps = state => {
  return {
    boxes: state.box
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newBox: () => {
      dispatch(newBoxRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightBox)