import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: canvas;
  background-color: blue;
`;

class Canvas extends Component {
  render() {
    return <Container>canvas</Container>;
  }
}

export default Canvas;
