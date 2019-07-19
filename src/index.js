import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import CallbackPage from './pages/callback';
import Auth from './components/Auth';
import AllPostsPage from './pages/allposts';
import AboutPage from './pages/about';
import InboxPage from './pages/inbox';
// import Nav from './components/Nav';

function App() {
  return (
    <div className="App container">
      <Auth>
        <div className="jumbotron">
          <Router>
            <div>
              {/* <Nav /> */}
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/inbox" component={InboxPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/callback" component={CallbackPage} />
                <Route path="/allposts" component={AllPostsPage} />
              </Switch>
            </div>
          </Router>
        </div>
      </Auth>

    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
