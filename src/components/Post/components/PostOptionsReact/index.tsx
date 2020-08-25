import './PostOptionsReact.scss'
import React, {useState} from 'react'
import {reactionOptions} from '../../../../data/reaction-options'
import { Reaction } from '../../../../types'
import PostOptionReact from '../PostOptionReact'

function PostOptionsReact() {
  const [show, setShow] = useState(false)
  return(
    <div onClickCapture={() => setShow(!show)} className="post-option-wrap" style={{position: 'relative'}}>
      <div className="post-option reaction-options-dropdown-trigger">
        <svg className="post-option-icon icon-thumbs-up">
          <use xlinkHref="#svg-thumbs-up"></use>
        </svg>
        <p className="post-option-text">React!</p>
      </div>
      <div className={`reaction-options reaction-options-dropdown `+(show ? 'show' : '')}>
        {reactionOptions.map((option: Reaction, index) =>
          <PostOptionReact key={index} option={option} />
        )}
      </div>
    </div>
  )
}

export default PostOptionsReact