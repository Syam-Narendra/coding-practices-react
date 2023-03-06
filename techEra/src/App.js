import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import Home from './Home/index'
import Course from './Course/index'
import NotFound from './NotFound/index'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={Course} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
