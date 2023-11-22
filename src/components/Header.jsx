import { Link } from "react-router-dom";
import { getCount } from "./../redux/slice/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../redux/slice/postsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  return (
    <header>
      <h1>Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
        <button className="count" onClick={() => dispatch(increaseCount())}>
          {count}
        </button>
      </nav>
    </header>
  );
};

export default Header;
