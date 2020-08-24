import React from 'react'
import { NavigationMenu as Menu } from '../../../../types'
import { Link } from 'react-router-dom'
type Props = {
  menu: Menu
}

function NavigationMenu({ menu }: Props) {
  return (
    <Link className="section-menu-item" to={menu.path}>
      <svg className={`section-menu-item-icon icon-${menu.icon}`}>
        <use xlinkHref={`#svg-${menu.icon}`}></use>
      </svg>
      <p className="section-menu-item-text">{menu.title}</p>
    </Link>
  )
}

export default NavigationMenu