import React, { useState } from "react";
import data from "../../data.json";
import Button from "../ui/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

function MainPage() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button
        title={"글 작성하기"}
        onClick={() => {
          navigate("/post-write");
        }}
      />
      <PostList
        posts={data}
        onClick={(item) => {
          navigate(`/post/${item.id}`);
        }}
      />
    </Wrapper>
  );
}

export default MainPage;
