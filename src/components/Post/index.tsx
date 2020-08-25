import React from 'react'
import parse from 'html-react-parser'
import WidgetSetting from '../WidgetSetting'
import { widgetSettings } from '../../data/widget-settings'
import {Post as post} from '../../types'
import User from './components/User'
import Video from './components/Video'
import TagsList from './components/TagsList'
import ContentActions from './components/ContentActions'
import PostOptions from './components/PostOptions'

type Props = {
  post: post
}

function Post({post}: Props) {
  return (
    <div className="widget-box no-padding">
      <WidgetSetting settings={widgetSettings.slice(1)} />
      <div className="widget-box-status">
        {post.pinned &&
          <div className="tag-sticker">
            <svg className="tag-sticker-icon primary icon-pinned">
              <use xlinkHref="#svg-pinned"></use>
            </svg>
          </div>
        }
        <div className="widget-box-status-content">
          <User post={post} />
          <p className="widget-box-status-text">{parse(post.text)}</p>
          {post.video && <Video video={post.video} />}
          {post.tags && post.tags.length > 0 && <TagsList tags={post.tags} />}
          <ContentActions post={post} />
        </div>
      </div>
      <PostOptions />
    </div>
  )
}

export default Post