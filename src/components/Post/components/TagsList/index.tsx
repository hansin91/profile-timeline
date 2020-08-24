import React from 'react'
import { Tag } from '../../../../types'

type Props = {
  tags: Array<Tag>
}

function TagsList({tags}: Props) {
  return (
   <div className="tag-list">
     {tags.map((tag, index) => <a key={index} className="tag-item secondary" href={`${tag.link}`}>{tag.name}</a>)}
   </div>
  )
}

export default TagsList