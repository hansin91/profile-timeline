import React from 'react'
import { parseToKMB } from '../../../../helpers'

type Props = {
  type: string
  text: any
}

function ProfileStat({type, text}: Props) {
  let path = type === 'origin' ? text.image : ''
  return (
    <div className="user-stat big">
      {type === 'origin' && path &&
        <img className="user-stat-image"
        src={require('../../../../assets/img/flag/'+path)} alt={`flag-${text.country.toLowerCase()}`} />}
      {type !== 'origin' &&  <p className="user-stat-title">{parseToKMB(Number(text))}</p>}
      <p className="user-stat-text">{type !== 'origin' ? type : text.country}</p>
    </div>
  )
}

export default ProfileStat