import './SocialLinks.scss'
import React from 'react'
import SocialLink from '../SocialLink'

type Props = {
  socialLinks: any
}

function SocialLinks({socialLinks}: Props) {
  return (
    <div className="profile-header-social-links-wrap">
      <div id="profile-header-social-links-slider" className="profile-header-social-links">
        {Object.keys(socialLinks).map((key) => <SocialLink key={key}
          socialMedia={key}
          socialLink={socialLinks[key]}  />)}
      </div>
    </div>
  )
}

export default SocialLinks