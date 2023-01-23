// Write your JS code here
import './index.css'
import {Link, withRouter} from 'react-router-dom'

const Header = () => (
  <ul className="header-container">
    <Link className="links" to="/">
      <li>Home</li>
    </Link>
    <Link className="links" to="/about">
      <li>About</li>
    </Link>
  </ul>
)

export default withRouter(Header)
