import React from 'react'
import HeaderActions from '../../../HeaderActions'
import {headerActions} from '../../../../data/actions'
import HeaderAction from '../../../HeaderAction'

function Actions() {
  return (
    <div className="header-actions">
      <div className="action-list dark">
        <HeaderActions actions={headerActions} />
      </div>
      {headerActions.slice(0,1).map((action, index) => <HeaderAction key={index} action={action}/>)}
    </div>
  )
}

export default Actions