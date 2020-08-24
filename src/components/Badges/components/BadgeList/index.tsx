import React from 'react'
import {Badge as badge} from '../../../../types'
import Badge from '../Badge'

type Props = {
  badges: Array<badge>
}

function BadgeList({badges}: Props) {
  return (
    <div className="badge-list">
      {badges.map((badge: badge, index) => <Badge key={index} badge={badge}/>  )}
    </div>
  )
}

export default BadgeList