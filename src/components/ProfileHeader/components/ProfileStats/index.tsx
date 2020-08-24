import React from 'react'
import ProfileStat from '../ProfileStat'

type Props = {
  stats: any
}

function ProfileStats({stats}: Props) {
  return (
    <div className="user-stats">
      {Object.keys(stats).map((key) =>
        <ProfileStat key={key} type={key} text={stats[key]} />)}
    </div>
  )
}

export default ProfileStats