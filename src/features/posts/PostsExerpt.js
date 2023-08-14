import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";
import ReactionButtons from "./ReactionButton";
import { Link } from "react-router-dom";
const PostsExerpt = ({post}) => {
  return (
    <article>
    <h2>{post.title}</h2>
    <p className="excerpt" >{post.body.substring(0,100)}</p>
    <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post </Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
    <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExerpt