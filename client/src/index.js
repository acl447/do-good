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
//import NavTabs from './components/Navbar/NavTabs';

class App extends Component {



  render() {
    return (
      // onClick={props.click} needs to be added to App Container somewhow
      <Router>
        <div className="app-container">
        

          
          <Auth>
            <div>
          
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
