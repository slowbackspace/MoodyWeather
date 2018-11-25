import styled from "styled-components";

const SIZES = {
  small: "1em",
  medium: "1.2em",
  big: "1.5em"
}

const Button = styled.button`
    margin: 0 1em;
    padding: 8px;
    font-size: ${p => p.size? SIZES[p.size] : SIZES["small"]};
    font-weight: bold;
    border: 2px solid palevioletred;
    border-radius: ${p => p.rounded? "50%" : "4px"};
    background-color: ${p => p.outline? "transparent" : "palevioletred"};
    color: ${p => p.outline? "palevioletred" : "#fafafa"};
    cursor: pointer;
    user-select: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:hover:not(:disabled) {
      background-color: #e25784;
      color: white;
    }

    &:disabled {
      opacity: .65;
      cursor: not-allowed;
    }
  `;

const DarkButton = styled(Button)`
  color: ${p => p.outline? "#75525e" : "#fafafa"};
  background-color: ${p => p.outline? "transparent" : "#5d3f49"};
  border-color: ${p => p.noborders? "transparent" : "#75525e"};

  &:hover:not(:disabled) {
      background-color: #5d3f49;
      border-color: ${p => p.noborders? "transarent" : "#5d3f49" };
      color: ${p => p.outline? "#fafafa" : "#75525e"};
    }
`;


export { Button, DarkButton };
