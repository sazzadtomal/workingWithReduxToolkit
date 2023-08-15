import {useSelector } from "react-redux";
import {selectAllPosts,getPostError,getPostStatus,fetchPosts, selectPostIds} from "./postSlice"
import PostsExcerpt from "./PostsExerpt";
import React from 'react'

const PostList = () => {



  const orderedPostsIds=useSelector(selectPostIds)
  const postStatus=useSelector(getPostStatus)
  const error=useSelector(getPostError)

  
  let content;
  if (postStatus === 'loading') {
      content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
      content = orderedPostsIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
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