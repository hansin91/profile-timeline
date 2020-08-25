import React from 'react'
import PostOptionsReact from '../PostOptionsReact'

function PostOptions() {
  return (
    <div className="post-options">
      <PostOptionsReact />
      <div className="post-option">
        <svg className="post-option-icon icon-comment">
          <use xlinkHref="#svg-comment"></use>
        </svg>
        <p className="post-option-text">Comment</p>
      </div>
      <div className="post-option">
        <svg className="post-option-icon icon-share">
          <use xlinkHref="#svg-share"></use>
        </svg>
        <p className="post-option-text">Share</p>
      </div>
    </div>
  )
}

export default PostOptions
