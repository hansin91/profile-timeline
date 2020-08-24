import React from 'react'
import { Link } from 'react-router-dom'
import Hexagon from 'react-svg-hexagon'
import { parseTimeAgo } from '../../../../helpers'

type Props = {
  post: any
}

function User({post}: Props) {
  return (
    <div className="user-status">
      <Link className="user-status-avatar" to="/profile-timeline">
        <div className="user-avatar small no-outline">
          <div className="user-avatar-content">
            <Hexagon height="32" stroke="#000" radius={2}>
              <img className="w-100 img-fluid"
              src={require(`../../../../assets/img/${post.user.profileImage}`)} alt={post.user.name} />
            </Hexagon>
          </div>
          <div className="user-avatar-progress">
            <Hexagon height="44" strokeWidth="3" stroke="#615dfa" />
          </div>
          <div className="user-avatar-progress-border">
            <Hexagon height="44" strokeWidth="3" stroke="#e7e8ee" />
          </div>
          <div className="user-avatar-badge">
            <div className="user-avatar-badge-border">
              <Hexagon fill="#fff" height="24"/>
            </div>
            <div className="user-avatar-badge-content">
              <Hexagon height="18" fill="#45437f" />
            </div>
            <p className="user-avatar-badge-text">{post.user.badge}</p>
          </div>
        </div>
      </Link>
      <p className="user-status-title medium">
        <Link className="bold" to="/profile-timeline">{post.user.name}</Link>
      </p>
      <p className="user-status-text small">{parseTimeAgo(post.createdDate)}</p>
    </div>
  )
}

export default User