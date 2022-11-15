import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import WritePostPage from "./component/page/WritePostPage";

function App(props) {
  return (
    <BrowserRouter>
      <p>신구의 블로그 만들기</p>

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<WritePostPage />} />
        <Route path="post/:postID" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
