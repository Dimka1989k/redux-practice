import { useSelector } from "react-redux";

import {
  selectPostIds,
  getPostsStatus,
  getPostsError,
} from "../redux/slice/postsSlice";
import { FidgetSpinner } from "react-loader-spinner";

import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  const orderedPostIds = useSelector(selectPostIds);
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
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostList;
