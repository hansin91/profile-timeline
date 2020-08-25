import React from 'react'
import Reaction from '../Reaction'

type Props = {
  reactions: any
}

const renderTotal = (reactions: any) => {
  let total = 0
  for (const key in reactions) {
    total += reactions[key].length
  }
  return <p className="meta-line-text">{total}</p>
}

function Reactions({reactions}: Props) {
  return (
    <div className="meta-line">
      <div className="meta-line-list reaction-item-list">
        {Object.keys(reactions).map((key) =>
          <Reaction key={key} people={reactions[key]} reaction={key} />)}
      </div>
      {renderTotal(reactions)}
    </div>
  )
}

export default Reactions