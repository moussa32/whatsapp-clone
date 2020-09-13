import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login.js';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <div className="app__body">
        {!user ? (
          <Login />
        ):(
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId" component={Chat}/>
            </Switch>
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
