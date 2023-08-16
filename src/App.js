// Fix:7 To use Switch component it must be rendered

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  // Fix:8 routes must be rendered inside the switch component
  // Fix:9 the route component must contain prop as "component"
  // fix:10 exact keyword must be added
  // Fix: 11 ":" is missed in the path
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
