import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid green;
  width: 100px;
  height: 50px;
  border-radius: 8px;
  font-weight: bold;
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

export default Button;
