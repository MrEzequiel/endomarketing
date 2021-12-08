import React from 'react'

import jsonData from './data.json'
import { ListPosts } from './Posts.style'

import PostCard from './PostCard'

function Posts() {
  const postsArray = jsonData.data
  console.log(postsArray)

  if (!postsArray.length) {
    return <h1>Não existem posts</h1>
  }

  return (
    <ListPosts>
      {postsArray.map((item, index) => (
        <PostCard keyIndex={index} item={item} timeAnimation={300 * index} />
      ))}
    </ListPosts>
  )
}

export default Posts
