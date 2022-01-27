import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <ul>
          <li>
            <button><Link to="/login">Login</Link></button>
          </li>
          <li>
            <button><Link to="/friendlist">FriendList</Link></button>
          </li>
          <li>
            <button><Link to="/addfriend">AddFriend</Link></button>
          </li>
          <li>
            <button><Link to="/logout">Logout</Link></button>
          </li>
        
        </ul>
        <Switch>

          <Route path="/login" component={Login} />
          <Route path="/" component={Login} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
