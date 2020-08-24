import React from 'react'
import WidgetSetting from '../components/WidgetSetting'
import {widgetSettings} from '../data/widget-settings'

export const withWidgetBox = (Component: any) => (props: any) => {
  return (
    <div className="widget-box">
      <WidgetSetting settings={widgetSettings.slice(0, 1)} />
      <p className="widget-box-title">{props.title} {props.badges && props.badges.length && <span className="highlighted">{props.badges.length}</span>} </p>
      <div className="widget-box-content">
        <Component {...props} />
      </div>
    </div>
  )
}
