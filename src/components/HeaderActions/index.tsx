import React, { Fragment } from 'react'
import HeaderAction from '../HeaderAction'
import {Action} from '../../types'

type Props = {
  actions: Array<Action>
}

function HeaderActions({actions}: Props) {
  return (
    <Fragment>
      {actions.slice(1).map((action, index) => <HeaderAction key={index} action={action} />)}
    </Fragment>
  )
}

export default HeaderActions