import './ProfileHeader.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import Hexagon from 'react-svg-hexagon'
import cover from '../../assets/img/cover/01.jpg'
import avatar from '../../assets/img/avatar/01.jpg'
import { User } from '../../types'
import SocialLinks from './components/SocialLinks'
import ProfileStats from './components/ProfileStats'

type Props = {
  user: User
}

function ProfileHeader({user}: Props) {
  return (
    <div className="profile-header">
       <figure className="profile-header-cover liquid">
        <img src={cover} alt="cover-01" className="hide" />
      </figure>
      <div className="profile-header-info">
        <div className="user-short-description big">
          <Link to="/" className="user-short-description-avatar user-avatar big">
            <div className="user-avatar-border">
              <Hexagon height="164" fill="#fff" />
            </div>
            <div className="user-avatar-content">
              <Hexagon fill="#000" height="110" stroke="black" strokeWidth={3} radius={10}>
                <img src={avatar} className="w-100 img-fluid" alt="profile-avatar"/>
              </Hexagon>
            </div>
            <div className="user-avatar-progress">
              <Hexagon height="136" strokeWidth={8} radius={5} stroke="#615dfa"/>
            </div>
            <div className="user-avatar-progress-border">
              <Hexagon height="136" strokeWidth={8} radius={5} stroke="#e7e8ee"/>
            </div>
            <div className="user-avatar-badge">
              <div className="user-avatar-badge-border">
                <Hexagon height="44" fill="#fff" />
              </div>
              <div className="user-avatar-badge-content">
                <Hexagon height="34" fill="#45437f"/>
              </div>
              <p className="user-avatar-badge-text">{user.badge}</p>
            </div>
          </Link>
          <p className="user-short-description-title">
            <Link to="/profile">{user.name}</Link>
          </p>
          <p className="user-short-description-text">
            <a href={user.website} rel="noopener noreferrer" target="_blank">{user.website}</a>
          </p>
        </div>
        <SocialLinks socialLinks={user.socialLinks} />
        <div className="profile-header-info-actions">
          <p className="profile-header-info-action button secondary"><span className="hide-text-mobile">Add</span> Friend +</p>
          <p className="profile-header-info-action button primary"><span className="hide-text-mobile">Send</span> Message</p>
        </div>
        <ProfileStats stats={user.stats} />
      </div>
    </div>
  )
}

export default ProfileHeader