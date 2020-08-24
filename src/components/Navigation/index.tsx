import React from 'react'
import TinySlider from "tiny-slider-react";
import {navigationMenus} from '../../data/navigation-menus'
import {NavigationMenu as Menu} from '../../types'
import NavigationMenu from './components/NavigationMenu'

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: true,
  items: navigationMenus.length
  // responsive: {
  //   420: {
  //     items: navigationMenus.length - 2
  //   }
  // }
};

function Navigation() {
  return (
    <nav className="section-navigation">
      <div id="section-navigation-slider" className="section-menu">
        <TinySlider settings={settings}>
          {navigationMenus.map((menu: Menu, index) => <NavigationMenu key={index} menu={menu} /> )}
        </TinySlider>
      </div>
    </nav>
  )
}

export default Navigation