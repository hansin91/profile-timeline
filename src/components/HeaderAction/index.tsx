import React from 'react'
import {Action}  from '../../types'

type Props = {
  action: Action
}

function HeaderAction({action} :Props) {
  return (
    <div className={action.name === 'Settings' ? 'action-item-wrap' : 'action-list-item-wrap'}>
      <div className={`${action.name === 'Settings' ? 'action-item dark header-settings-dropdown-trigger' : 'action-list-item header-dropdown-trigger'} ` + (action.name === 'Notifications' ? 'unread' : '') }>
        <svg className={`${action.name === 'Settings' ? 'action-item-icon' : 'action-list-item-icon' } icon-${action.icon}`}>
          <use xlinkHref={`#svg-${action.icon}`}></use>
        </svg>
      </div>
    </div>
  )
}

export default HeaderAction