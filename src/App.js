import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import StateWiseDetails from './components/StateWiseDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/state/:stateCode" component={StateWiseDetails} />
  </Switch>
)

export default App
