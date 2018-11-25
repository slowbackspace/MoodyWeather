import styled from "styled-components";

const Input = styled.input`
  padding: 8px;
  outline: 0;
  border-width: 0 0 2px 0;
  border-bottom: 2px solid #ccc;
  background: transparent;
  color: palevioletred;

  &:focus {
    border-color: palevioletred;
  }
`;

export { Input };
