import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import HomePage from './pages/signin';
import DashboardPage from './pages/dashboard';
import CallbackPage from './pages/callback';
import Auth from './components/Auth';
import AllPostsPage from './pages/allposts';
import AboutPage from './pages/about';
import InboxPage from './pages/inbox';
import './index.css'

// import { PropertySignature } from '@babel/types';
<<<<<<< HEAD:client/src/index.js
// import NavTabs from './components/Navbar/NavTabs';
=======
//import NavTabs from './components/Navbar/NavTabs';
>>>>>>> sign-in-page-jv:src/index.js

class App extends Component {



  render() {
    return (
      // onClick={props.click} needs to be added to App Container somewhow
      <Router>
        <div className="App container">
          <Auth>
            <div className="jumbotron">
<<<<<<< HEAD:client/src/index.js
        
=======
          
>>>>>>> sign-in-page-jv:src/index.js
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/inbox" component={InboxPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/callback" component={CallbackPage} />
                <Route exact path="/home" component={AllPostsPage} />
              </Switch>
            </div>
          </Auth>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
