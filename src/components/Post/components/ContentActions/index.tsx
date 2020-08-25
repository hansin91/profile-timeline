import React from 'react'
import { Post } from '../../../../types'
import Reactions from '../Reactions'
import Participants from '../Participants'

type Props = {
  post: Post
}

function ContentActions({post}: Props) {
  return(
    <div className="content-actions">
      <div className="content-action">
        <Reactions reactions={post.reactions} />
        <Participants participants={post.participants} />
      </div>
      <div className="content-action">
        <div className="meta-line">
          <p className="meta-line-link">{post.comments} {post.comments > 1 ? 'Comments' : 'Comment'}</p>
        </div>
        <div className="meta-line">
          <p className="meta-line-link">{post.shares} {post.shares > 1 ? 'Shares' : 'Share'} </p>
        </div>
      </div>
    </div>
  )
}

export default ContentActions

