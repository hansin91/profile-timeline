import './NavigationWidgetSmall.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import Hexagon from 'react-svg-hexagon'
import image from '../../assets/img/avatar/01.jpg'
import NavMenus from './components/NavMenus'
import {navMenus} from '../../data/nav-menus'

function NavigationWidgetSmall() {
  return (
    <nav id="navigation-widget-small"
      className="navigation-widget navigation-widget-desktop closed sidebar left delayed">
      <Link to="/profile" className="user-avatar small no-outline online">
        <div className="user-avatar-content">
          <Hexagon height="32" stroke="black" strokeWidth={3}>
            <img className="w-100 img-fluid" src={image} alt="profile-avatar"/>
          </Hexagon>
        </div>
        <div className="user-avatar-progress">
          <Hexagon height="44" stroke="#615dfa" strokeWidth={3} />
        </div>
        <div className="user-avatar-progress-border">
          <Hexagon height="44" stroke="#e7e8ee" strokeWidth={3} radius={5} />
        </div>
        <div className="user-avatar-badge">
          <div className="user-avatar-badge-content">
            <Hexagon fill="#45437f" height="20" stroke="#fff" strokeWidth={3}>
              <p className="user-avatar-badge-text">24</p>
            </Hexagon>
          </div>
        </div>
      </Link>
      <NavMenus navMenus={navMenus} />
    </nav>
  )
}

export default NavigationWidgetSmall