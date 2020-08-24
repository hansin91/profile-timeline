import './Badge.scss'
import React, {useState} from 'react'
import {Badge as badge} from '../../../../types'

type Props = {
  badge: badge
}

function Badge({badge}: Props) {
  const [show, setShow] = useState(false)

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="badge-item text-tooltip-tft" style={{position: 'relative'}}>
      <img src={require(`../../../../assets/img/badge/${badge.img}`)} alt={`badge-${badge.alt}`} />
      <div className={`xm-tooltip badge `+ (show ? 'show' : '')}>
        <p className="xm-tooltip-text">{badge.name}</p>
      </div>
    </div>
  )
}

export default Badge