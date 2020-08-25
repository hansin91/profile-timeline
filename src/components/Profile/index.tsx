import React from 'react'
import { User, Post as PostType } from '../../types'
import AboutMe from '../AboutMe'
import Badges from '../Badges'
import { badges } from '../../data/badges'
import {posts} from '../../data/posts'
import Post from '../Post'

type Props = {
  user: User
}

function Profile({user}: Props) {
  return (
    <div className="grid grid-3-6-3 mobile-prefer-content">
      <div className="grid-column">
        <AboutMe title="About Me" user={user} />
        <Badges title="Badges" badges={badges} />
      </div>
      <div className="grid-column">
        {posts.map((post: PostType, index) => <Post key={index} post={post} />)}
      </div>
    </div>
  )
}

export default Profile