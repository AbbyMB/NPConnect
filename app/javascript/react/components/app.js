import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UserContainer from '../containers/UserContainer'
import FundersContainer from '../containers/FundersContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={UserContainer} />
        <Route path='/users/:id' component={UserContainer} />
        <Route path='/funders' component={FundersContainer} />
      </Route>
    </Router>
  )
}

export default App;
