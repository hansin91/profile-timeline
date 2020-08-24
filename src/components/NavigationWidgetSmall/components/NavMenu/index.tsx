import './NavMenu.scss'
import React, {useState} from 'react'
import { NavigationMenu } from '../../../../types'

type Props = {
  menu: NavigationMenu
}

function NavMenu({menu}: Props) {
  const [show, setShow] = useState(false)
  const showToolTip = () => {
    setShow(true)
  }

  const hideToolTip = () => {
    setShow(false)
  }

  return (
    <li className="menu-item">
      <a
        onMouseEnter={showToolTip}
        onMouseLeave={hideToolTip}
        className="menu-item-link text-tooltip-tfr" href={menu.path} data-title={menu.title}>
        <svg className={`menu-item-link-icon icon-${menu.icon}`}>
          <use xlinkHref={`#svg-${menu.icon}`}></use>
        </svg>
        <div className={`xm-tooltip ` + (show ? 'show' : '') }>
          <p className="xm-tooltip-text">{menu.title}</p>
        </div>
      </a>
    </li>
  )
}

export default NavMenu