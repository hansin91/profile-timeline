import React from 'react'
import parse from 'html-react-parser'
import { Video as video } from '../../../../types'

type Props = {
  video: video
}

function Video({video}: Props) {
  return (
    <a rel="noopener noreferrer" className="video-status small" href={video.link} target="_blank">
      <img className="video-status-image mobile" src={require(`../../../../assets/img/${video.img}`)} alt={video.img}/>
      <figure className="video-status-image liquid">
        <img style={{borderRadius: '5px'}} src={require(`../../../../assets/img/${video.img}`)} alt={video.img}/>
      </figure>
      <div className="video-status-info">
        <p className="video-status-title">{parse(video.title)}</p>
        <p className="video-status-text">{video.text}</p>
        <p className="video-status-meta">{video.meta}</p>
      </div>
    </a>
  )
}

export default Video
