import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UserContainer from '../containers/UserContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/users/:id' component={UserContainer} />
    </Router>
  )
}

export default App
