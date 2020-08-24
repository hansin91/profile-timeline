import './WidgetSetting.scss'
import React, {useState} from 'react'

type Props = {
  settings: Array<string>
}

function WidgetSetting({settings}: Props) {
  const [show, setShow] = useState(false)
  return (
    <div onClick={() => setShow(!show)} className="widget-box-settings">
      <div className="post-settings-wrap" style={{position: 'relative'}}>
        <div className={`post-settings widget-box-post-settings-dropdown-trigger `+(show ? 'active': '')}>
          <svg className="post-settings-icon icon-more-dots">
            <use xlinkHref="#svg-more-dots"></use>
          </svg>
        </div>
        <div className={`simple-dropdown widget-box-post-settings-dropdown `+ (show ? 'show' : 'hide')}>
          {settings.map((setting: string, index) => <p key={index} className="simple-dropdown-link">{setting}</p>)}
        </div>
      </div>
    </div>
  )
}

export default WidgetSetting