import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const onSubmitSuccess = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 10})
    history.replace('/')
  }

  const onClickLoginButton = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }
  if (Cookies.get('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <>
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLoginButton}>
        Login With Sample Creds
      </button>
    </>
  )
}
export default Login
