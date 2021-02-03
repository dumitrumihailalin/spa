import SignupSaga from './signup/sagas'
import LoginSaga from './login/sagas'
import WidgetSaga from './widgets/sagas'
import DashboardSaga from './dashboard/sagas';

export default function* IndexSaga () {
  yield [
    SignupSaga(),
    LoginSaga(),
    WidgetSaga(), 
    DashboardSaga()
  ]
}
