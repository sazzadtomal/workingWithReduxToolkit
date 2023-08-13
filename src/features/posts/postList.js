import { useDispatch,useSelector } from "react-redux";
import {selectAllPosts} from "./postSlice"
import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";
import ReactionButtons from "./ReactionButton";

import React from 'react'

const PostList = () => {
  const posts=useSelector(selectAllPosts)
  
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts= orderedPosts.map(post=>(
    <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId}/>
          <TimeAgo timestamp={post.date}/>
        </p>
        <ReactionButtons post={post} />
    </article>
  ))



  return (
     <section>
        {renderedPosts}
     </section>
  )
}

export default PostList