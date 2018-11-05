import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UserContainer from '../containers/UserContainer'
import FundersContainer from '../containers/FundersContainer'
import NavBar from './NavBar'
import ProgramsContainer from '../containers/ProgramsContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={UserContainer} />
        <Route path='/users/:id' component={UserContainer} />
        <Route path='/funders' component={FundersContainer} />
        <Route path='/programs' component={ProgramsContainer} />
      </Route>
    </Router>
  )
}

export default App;
