import React, { useState } from "react";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyleContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

function WritePostPage() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button
        title="뒤로 가기"
        onClick={() => {
          navigate("/");
        }}
      />
      <StyleContent>
        <h3>제목</h3>
        <TextInput height={30} />
      </StyleContent>
      <StyleContent>
        <h3>내용</h3>
        <TextInput height={300} />
      </StyleContent>
    </Wrapper>
  );
}

export default WritePostPage;
