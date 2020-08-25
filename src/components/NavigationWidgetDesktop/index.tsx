import React from 'react'
import image from '../../assets/img/cover/01.jpg'
import { User } from '../../types'

type Props = {
  visible: boolean
  user: User
}

function NavigationReactWidgetDesktop({user, visible}: Props) {
  return (
    <nav id="navigation-widget"
      className={`navigation-widget navigation-widget-desktop sidebar left ` + (visible ? 'hidden' : 'delayed')}>
      <figure className="navigation-widget-cover liquid">
        <img className="w-100 img-fluid" src={image} alt="cover-01"/>
      </figure>
    </nav>
  )
}

export default NavigationReactWidgetDesktop