import React from 'react'
import {NavigationMenu} from '../../../../types'
import NavMenu from '../NavMenu'

type Props = {
  navMenus: Array<NavigationMenu>
}

function NavMenus({navMenus} :Props) {
  return (
    <ul className="menu small">
      {navMenus.map((menu: NavigationMenu, index) => <NavMenu key={index} menu={menu}/>)}
    </ul>
  )
}

export default NavMenus