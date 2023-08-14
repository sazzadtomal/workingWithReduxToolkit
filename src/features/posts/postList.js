import { useDispatch,useSelector } from "react-redux";
import {selectAllPosts,getPostError,getPostStatus,fetchPosts} from "./postSlice"
import { useEffect } from "react";
import PostsExcerpt from "./PostsExerpt";
import React from 'react'

const PostList = () => {

  const dispatch=useDispatch()

  const posts=useSelector(selectAllPosts)
  const postStatus=useSelector(getPostStatus)
  const error=useSelector(getPostError)




  useEffect(()=>{
      if(postStatus=== "idle"){
        console.log("fetiching posts")
        dispatch(fetchPosts())
      }
  },[postStatus,dispatch])



  

  
  let content;
  if (postStatus === 'loading') {
      content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
      const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
      content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
  } else if (postStatus === 'failed') {
      content = <p>{error}</p>;
  }
 


  return (
     <section>
        {content}
     </section>
  )
}

export default PostList