import { AuthConsumer } from '../../providers/AuthProvider';
import{ Link } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will display when user is logged in
    if (user) {
      return (
        <>
          <li onClick={() => handleLogout()}>
            Logout
          </li>
        </>
      )
    } else {
      // links will display when logged out
      return (
      <>
        <Link to='/login'>
          <li>
            Login
          </li>
        </Link>
        <Link to='/register'>
          <li>
            Register
          </li>
        </Link>
      </>
      )
    }
  }
  return (
    <>
      <nav>
        <ul>
          {/* these links will always show regardless of user being logged in or not */}
          <Link to="/">
            <li>
              home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
} 

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...props} {...value}/> }
  </AuthConsumer>
)

export default ConnectedNavbar;