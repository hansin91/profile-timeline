import React, { Fragment } from 'react'
import ProfileInformation from './components/ProfileInformation'
import { withWidgetBox } from '../../hoc/withWidgetBox'

type Props = {
  user: any
  title: string
}

function AboutMe({user}: Props) {
  return (
    <Fragment>
      <p className="paragraph">{user.about}</p>
      <div className="information-line-list">
        {Object.keys(user.profile).map((key: string) =>
          <ProfileInformation key={key} title={key} text={user.profile[key]} /> )}
      </div>
    </Fragment>
  )
}

export default withWidgetBox(AboutMe)