import PostList from "./components/PostList";
import AddFormPost from "./components/AddFormPost";
import Layout from "./components/Layout";
import SinglePostPage from "./components/SinglePostPage";
import EditPostForm from "./components/EditPostForm";
import UserPage from "./components/UserPAge";
import UsersList from "./components/UsersList";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="post">
          <Route index element={<AddFormPost />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
