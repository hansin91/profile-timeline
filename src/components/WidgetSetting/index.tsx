import React from 'react'

function WidgetSetting() {
  return (
    <div className="widget-box-settings">
    <div className="post-settings-wrap">
      <div className="post-settings widget-box-post-settings-dropdown-trigger">
        <svg className="post-settings-icon icon-more-dots">
          <use xlinkHref="#svg-more-dots"></use>
        </svg>
      </div>
      <div className="simple-dropdown widget-box-post-settings-dropdown hide">
        <p className="simple-dropdown-link">Widget Settings</p>
      </div>
    </div>
  </div>
  )
}

export default WidgetSetting