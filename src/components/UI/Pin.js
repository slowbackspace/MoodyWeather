import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { TiPin } from "react-icons/ti";

const pinRotation = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(-45deg);
}
`;

const unpinRotation = keyframes`
from {
  transform: rotate(-45deg);
}

to {
  transform: rotate(-0deg);
}
`;
const StyledPin = styled.div`
  align-items: center;
  margin-left: auto;
  cursor: pointer;

  &.pinned {
    animation: ${pinRotation} 0.2s forwards ease-in-out;
  }

  &.unpinned {
    animation: ${unpinRotation} 0.2s forwards ease-in-out;
  }
`;

const Pin = ({ toggle, pinned, title }) => {
  return (
    <StyledPin
      onClick={toggle}
      className={pinned ? "pinned" : "unpinned"}
      title={title}
    >
      <TiPin />
    </StyledPin>
  );
};

Pin.propTypes = {
  toggle: PropTypes.func.isRequired,
  pinned: PropTypes.bool.isRequired,
  title: PropTypes.string
};

export default Pin;
