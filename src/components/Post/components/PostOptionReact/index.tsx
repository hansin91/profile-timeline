import React from 'react'
import { Reaction } from '../../../../types'

type Props = {
  option: Reaction
}

function PostOptionReact({option}: Props) {
  return (
    <div className="reaction-option text-tooltip-tft" data-title={option.name}>
      <img className="reaction-option-image" src={require(`../../../../assets/img/reaction/${option.icon}.png`)} alt={`reaction-${option.icon}`}/>
    </div>
  )
}

export default PostOptionReact