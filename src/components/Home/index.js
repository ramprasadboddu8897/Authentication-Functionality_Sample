// Write your JS code here
import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="home-container">
      <Header />
      <h1>Home Route</h1>
      <button onClick={onClickLogout} type="button">
        Logout
      </button>
    </div>
  )
}
export default withRouter(Home)
