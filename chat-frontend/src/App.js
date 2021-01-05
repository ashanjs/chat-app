import './App.scss';
import React from 'react'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Chat from './components/Chat/Chat'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/Router/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path='/' component={Chat} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route render={() => <h1>404 Page Not Found!</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
