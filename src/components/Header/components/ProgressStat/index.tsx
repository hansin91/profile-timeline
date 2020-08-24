import './ProgressStat.scss'
import React from 'react'
import {Line} from 'rc-progress';


type Props = {
  exp: number
  percent: number
}

function ProgressStat({exp, percent}: Props) {
  return (
    <div className="header-actions">
      <div className="progress-stat">
        <div className="bar-progress-wrap">
          <p className="bar-progress-info">Next:
          <span className="bar-progress-text">{exp}
            <span className="bar-progress-unit">exp</span>
          </span>
          </p>
        </div>
        <div id="logged-user-level" className="progress-stat-bar" style={{ position: 'relative', width: '110px', height: '4px'}}>
          <Line percent={percent} trailWidth={4} strokeWidth={4} trailColor="#4a46c8" strokeColor="#41efff" />
        </div>
      </div>
    </div>
  )
}

export default ProgressStat