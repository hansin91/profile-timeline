import React from 'react'
import Navigation from './components/Navigation'
import {menus} from '../../data/menus'
import SearchBar from './components/SearchBar'
import ProgressStat from './components/ProgressStat'
import Actions from './components/Actions'

function Header() {
  return (
    <header className="header">
      <div className="header-actions">
        <div className="header-brand">
          <div className="logo">
            <svg className="icon-logo-vikinger small">
              <use xlinkHref="#svg-logo-vikinger"></use>
            </svg>
          </div>
          <h1 className="header-brand-text">Vikinger</h1>
        </div>
      </div>
      <div className="header-actions">
        <div className="sidemenu-trigger navigation-widget-trigger">
          <svg className="icon-grid">
            <use xlinkHref="#svg-grid"></use>
          </svg>
        </div>
        <div className="mobilemenu-trigger navigation-widget-mobile-trigger">
          <div className="burger-icon inverted">
            <div className="burger-icon-bar"></div>
            <div className="burger-icon-bar"></div>
            <div className="burger-icon-bar"></div>
          </div>
        </div>
        <Navigation menus={menus} />
      </div>
      <SearchBar />
      <ProgressStat percent={70} exp={38}/>
      <Actions />
    </header>
  )
}

export default Header