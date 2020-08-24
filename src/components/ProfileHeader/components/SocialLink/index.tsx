import React from 'react'

type Props = {
  socialLink: string,
  socialMedia: string
}

function SocialLink({socialLink, socialMedia}: Props) {
  return (
    <div className="profile-header-social-link">
      <a href={socialLink} target="__blank" className={`social-link ${socialMedia}`}>
        <svg className={`icon-${socialMedia}`}>
          <use xlinkHref={`#svg-${socialMedia}`}></use>
        </svg>
      </a>
    </div>
  )
}

export default SocialLink