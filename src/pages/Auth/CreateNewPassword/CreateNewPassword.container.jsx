import { connect } from 'react-redux'
import { errorsActions } from 'redux/reducers/errors'
import { alertsActions } from 'redux/reducers/alerts'
import CreateNewPassword from './CreateNewPassword'

const mapDispatchToProps = (dispatch) => ({
  createNewPasswordFailed: (e) => {
    dispatch(errorsActions.createNewPasswordFailed(e.toString()))
  },
  newPassword: (message) => {
    dispatch(alertsActions.newPassword(message))
  },
})

export default connect(null, mapDispatchToProps)(CreateNewPassword)
