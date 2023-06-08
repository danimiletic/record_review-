import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user)
      setUser({ email: '', password: '' })
    }
    else {
      alert('Passwords do not match!')
    }
  }
  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type='email'
          name='email'
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
          autoFocus
          required
        />
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
          required
        />
        <label>Password Confirmation</label>
        <input 
          type='password'
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          onChange={(e) => setUser({...user, passwordConfirmation: e.target.value})}
          required
        />
      <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister; 