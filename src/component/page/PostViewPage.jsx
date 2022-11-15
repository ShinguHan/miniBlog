import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";
import Button from "../ui/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

function PostViewPage(props) {
  const navigate = useNavigate();
  const { postID } = useParams();

  const post = data.find((item) => {
    return item.id == postID;
  });

  return (
    <Wrapper>
      <Button
        title="뒤로 가기"
        onClick={() => {
          navigate("/");
        }}
      />
      <p>{post.title}</p>
      <p>{post.content}</p>
    </Wrapper>
  );
}

export default PostViewPage;
