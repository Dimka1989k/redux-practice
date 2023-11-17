import { useSelector } from "react-redux";
import { selectAllUsers } from "../redux/selectors/selectors";
import PropTypes from "prop-types";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);
  return <span>{author ? author.name : "Unknow author"}</span>;
};

PostAuthor.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default PostAuthor;
