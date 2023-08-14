import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";
import ReactionButtons from "./ReactionButton";

const PostsExerpt = ({post}) => {
  return (
    <article>
    <h2>{post.id}</h2>
    <h3>{post.title}</h3>
    <p>{post.body.substring(0,100)}</p>
    <p className="postCredit">
      <PostAuthor userId={post.userId}/>
      <TimeAgo timestamp={post.date}/>
    </p>
    <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExerpt