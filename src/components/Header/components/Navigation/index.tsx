import React from 'react'
import {Link} from 'react-router-dom'

type Menu = {
  name: string
  path: string
}

type Props = {
  menus: Array<Menu>
}

function Navigation({ menus }: Props) {
  return (
    <nav className="navigation">
      <ul className="menu-main">
        {menus.slice(0, 3).map((menu: Menu, index) => {
          return (
            <li key={index} className="menu-main-item">
              <Link className="menu-main-item-link" to={menu.path}>{menu.name}</Link>
            </li>
          )
        })}
        <li className="menu-main-item">
          <p className="menu-main-item-link">
            <svg className="icon-dots">
              <use xlinkHref="#svg-dots"></use>
            </svg>
          </p>
          <ul className="menu-main">
            {menus.slice(3).map((menu: Menu, index) => {
              return (
                <li key={index} className="menu-main-item">
                  <Link className="menu-main-item-link" to={menu.path}>{menu.name}</Link>
                </li>
              )
            })}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation