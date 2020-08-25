import React from 'react'
import Participant from '../Participant'

type Props = {
  participants: Array<any>
}

function Participants({participants}: Props) {
  return(
    <div className="meta-line">
       <div className="meta-line-list user-avatar-list">
         {participants.map((participant, index) => <Participant key={index} participant={participant} />)}
       </div>
       <p className="meta-line-text">14 Participants</p>
    </div>
  )
}

export default Participants