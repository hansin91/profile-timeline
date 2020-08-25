import './Reaction.scss'
import React, {useState} from 'react'

type Props = {
  reaction: any
  people: Array<any>
}

function Reaction({reaction, people}: Props) {
  const [show, setShow] = useState(false)
  return (
    <div
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      className="reaction-item" style={{position: 'relative'}}>
      <img className="reaction-image reaction-item-dropdown-trigger"
      src={require(`../../../../assets/img/reaction/${reaction}.png`)} alt={`reaction-${reaction}`}/>
      <div className={`simple-dropdown padded reaction-item-dropdown `+ (show ? 'active' : '')}>
        <p className="simple-dropdown-text">
          <img className="reaction" src={require(`../../../../assets/img/reaction/${reaction}.png`)}
            alt={`reaction-${reaction}`}/> <span className="bold">{reaction[0].toUpperCase()+reaction.slice(1)}</span>
        </p>
        {people.slice(0, 6).map((person, index) =>
          <p key={index} className="simple-dropdown-text">{person}</p>)}
        {people.slice(6).length > 0 &&
          <p className="simple-dropdown-text"><span className="bold">and {people.slice(6).length} more...</span></p>}
      </div>
    </div>
  )
}

export default Reaction