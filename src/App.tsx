import './assets/styles/index.scss'
import React, { Fragment } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Icons from './components/Icons'
import NavigationWidgetSmall from './components/NavigationWidgetSmall'
import ProfileHeader from './components/ProfileHeader'
import {user} from './data/user'
import Navigation from './components/Navigation'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <Fragment>
        <NavigationWidgetSmall user={user} />
        <Header />
        <Icons />
        <div className="content-grid" style={{transform: 'translate(141px, 0px)', transition: 'transform 0.4s ease-in-out 0s'}}>
          <ProfileHeader user={user} />
          <Navigation />
          <Profile user={user} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
