import {useSelector } from "react-redux";
import {selectPostIds, useGetPostsQuery} from "./postSlice"
import PostsExcerpt from "./PostsExerpt";
import React from 'react'

const PostList = () => {
  

  const {isLoading,isSuccess,isError,error}=useGetPostsQuery()


  const orderedPostsIds=useSelector(selectPostIds)
  console.log(isSuccess,orderedPostsIds)
  
  let content;
  if (isLoading) {
      content = <p>"Loading..."</p>;
  } else if (isSuccess) {
      content = orderedPostsIds.map(postId => <PostsExcerpt key={postId} postId={postId}/>)
  } else if (isError === 'failed') {
      content = <p>{error}</p>;
  }
 


  return (
     <section>
        {content}
     </section>
  )
}

export default PostList