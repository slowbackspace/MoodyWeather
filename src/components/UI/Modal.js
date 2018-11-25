import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "./Button";

const Overlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? "block" : "none")};
`;

const StyledModal = styled.div`
  position: fixed;
  max-width: 500px;
  margin: 20% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;

  background: white;
  border-radius: 4px;

  @media all and (max-width: 575px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 8px;
  padding: 16px;
  background: #fafafa;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 16px 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 16px 16px 16px;
`;

const OkButton = styled(Button)`
  min-width: 64px;
`;

class Modal extends Component {
  render() {
    return (
      <Overlay show={this.props.show}>
        <StyledModal>
          <Header>{this.props.title}</Header>
          <Content>{this.props.children}</Content>
          <Footer>
            <OkButton onClick={() => this.props.OkHandler()}>OK</OkButton>
          </Footer>
        </StyledModal>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
};

export default Modal;
