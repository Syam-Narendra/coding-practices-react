import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/index'
import Login from './components/LoginForm/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
)

export default App
