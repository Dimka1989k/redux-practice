import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post?.title}</h3>
      <p>{post?.body.substring(0, 100)}</p>
      <p className="post">
        <PostAuthor userId={post?.userId} />
        <TimeAgo timestamp={post?.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

// PostExcerpt.propTypes = {
//   post: PropTypes.object.isRequired,
//   title: PropTypes.string,
//   body: PropTypes.string,
//   userId: PropTypes.string,
//   date: PropTypes.string,
// };

export default PostExcerpt;
