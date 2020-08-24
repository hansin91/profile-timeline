import React from 'react'
import WidgetSetting from '../components/WidgetSetting'

export const withWidgetBox = (Component: any) => (props: any) => {
  return (
    <div className="widget-box">
      <WidgetSetting />
      <p className="widget-box-title">{props.title}</p>
      <div className="widget-box-content">
        <Component {...props} />
      </div>
    </div>
  )
}
