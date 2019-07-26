import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import HomePage from './pages/signin';
import DashboardPage from './pages/dashboard';
import CallbackPage from './pages/callback';
import Auth from './components/Auth';
import AllPostsPage from './pages/home';
import AboutPage from './pages/about';
import InboxPage from './pages/inbox';
import './index.css'
import DetailPage from './pages/detail';

// import { PropertySignature } from '@babel/types';
//import NavTabs from './components/Navbar/NavTabs';

class App extends Component {



  render() {
    return (
      // onClick={props.click} needs to be added to App Container somewhow
      <Router>
<<<<<<< HEAD
        <div className="app-container">
        

          
          <Auth>
            <div>
=======
        <div className="App container">
          <Auth>
            <div className="jumbotron">
>>>>>>> f5e8bf058880e842a5eca848c9b79c0b55767ac0
          
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/inbox" component={InboxPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/callback" component={CallbackPage} />
                <Route exact path="/home" component={AllPostsPage} />
                <Route exact path="/posts/:id" component={DetailPage} />
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
