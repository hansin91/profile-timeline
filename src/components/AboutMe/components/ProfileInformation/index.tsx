import React from 'react'

type Props = {
  title: string
  text: string
}

function ProfileInformation({title, text}: Props) {
  return (
    <div className="information-line">
      <p className="information-line-title">{title}</p>
      {title !== 'Web' && <p className="information-line-text">{text} {title === 'Age' ? 'Years' : ''} </p>}
      {title === 'Web' && <p className="information-line-text"><a href={text} target="__blank">{text}</a> </p> }
    </div>
  )
}

export default ProfileInformation