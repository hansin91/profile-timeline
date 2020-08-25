import './Participant.scss'
import React from 'react'
import Hexagon from 'react-svg-hexagon'

type Props = {
  participant: any
}

function Participant({participant}: Props) {
  console.log(participant)
  return (
    <div className="user-avatar micro no-stats">
      <div className="user-avatar-border">
        <Hexagon height="24" fill="#fff"/>
      </div>
      <div className="user-avatar-content participant">
        <Hexagon height="20" radius={1}>
          <img className="w-100 img-fluid" src={require(`../../../../assets/img/${participant.img}`)} alt={participant.name} />
        </Hexagon>
      </div>
    </div>
  )
}

export default Participant