import './assets/styles/index.scss'
import React, {useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Icons from './components/Icons'
import NavigationWidgetSmall from './components/NavigationWidgetSmall'
import ProfileHeader from './components/ProfileHeader'
import {user} from './data/user'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import NavigationReactWidgetDesktop from './components/NavigationWidgetDesktop'

function App() {
  const [visible, setVisible] = useState(true)
  const showNavigationDesktop = () => {
    setVisible(!visible)
  }
  return (
    <Router>
      <NavigationWidgetSmall visible={visible} user={user} />
      <NavigationReactWidgetDesktop visible={visible} user={user} />
      <Header onShowNavigationDesktop={showNavigationDesktop} />
      <div className="content-grid" style={{transform: 'translate(141px, 0px)', transition: 'transform 0.4s ease-in-out 0s'}}>
        <ProfileHeader user={user} />
        <Navigation />
        <Profile user={user} />
      </div>
      <Icons />
    </Router>
  );
}

export default App;
