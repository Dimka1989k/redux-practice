import { useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
} from "../redux/selectors/selectors";
import { FidgetSpinner } from "react-loader-spinner";

import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = (
      <div className="loader">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#256377", "#256377", "#256377"]}
          backgroundColor="#f2eeee"
        />
      </div>
    );
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostList;
