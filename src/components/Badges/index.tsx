import React from 'react'
import BadgeList from './components/BadgeList'
import { withWidgetBox } from '../../hoc/withWidgetBox'
import { Badge } from '../../types'

type Props = {
  badges: Array<Badge>
}

function Badges({badges}: Props) {
  return (
    <BadgeList badges={badges} />
  )
}

export default withWidgetBox(Badges)