import './PostOptionsReact.scss'
import React from 'react'
import {reactionOptions} from '../../../../data/reaction-options'
import { Reaction } from '../../../../types'
import PostOptionReact from '../PostOptionReact'
import useVisible from '../../../../hooks/useVisible'

function PostOptionsReact() {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  return(
    <div ref={ref}>
      <div onClickCapture={() => setIsVisible(!isVisible)} className="post-option-wrap" style={{position: 'relative'}}>
        <div className="post-option reaction-options-dropdown-trigger">
          <svg className="post-option-icon icon-thumbs-up">
            <use xlinkHref="#svg-thumbs-up"></use>
          </svg>
          <p className="post-option-text">React!</p>
        </div>
        <div className={`reaction-options reaction-options-dropdown `+(isVisible ? 'show' : '')}>
          {reactionOptions.map((option: Reaction, index) =>
            <PostOptionReact key={index} option={option} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PostOptionsReact