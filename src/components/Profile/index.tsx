import React from 'react'
import { User } from '../../types'
import AboutMe from '../AboutMe'

type Props = {
  user: User
}

function Profile({user}: Props) {
  return (
    <div className="grid grid-3-6-3 mobile-prefer-content">
      <div className="grid-column">
        <AboutMe title="About Me" user={user} />
      </div>
    </div>
  )
}

export default Profile